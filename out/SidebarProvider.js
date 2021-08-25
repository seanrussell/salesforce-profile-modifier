"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarProvider = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const getNonce_1 = require("./getNonce");
const vscodeCore_1 = require("./services/vscodeCore");
class SidebarProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView) {
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri],
        };
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage((data) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            switch (data.command) {
                case "onInfo": {
                    if (!data.data) {
                        return;
                    }
                    vscode.window.showInformationMessage(data.data);
                    break;
                }
                case "onError": {
                    if (!data.data) {
                        return;
                    }
                    vscode.window.showErrorMessage(data.data);
                    break;
                }
                case "reload": {
                    this.retrieveProfileData(webviewView);
                }
                case "modify": {
                    if (!data.data) {
                        return;
                    }
                    const cmd = data.data;
                    let activeTerminal = vscodeCore_1.VSCodeCore.setupTerminal();
                    if (activeTerminal) {
                        activeTerminal.sendText(cmd);
                        vscode.window.showInformationMessage('Command issued to modify profiles. View the console for status.');
                        (_a = this._view) === null || _a === void 0 ? void 0 : _a.webview.postMessage({
                            command: 'modify-complete',
                            data: {},
                        });
                    }
                    break;
                }
            }
        }));
        this.retrieveProfileData(webviewView);
    }
    retrieveProfileData(panel) {
        const workspaceFolders = (vscode.workspace.workspaceFolders) ? vscode.workspace.workspaceFolders : [];
        let availableProfilesMap = {};
        if (workspaceFolders.length > 0) {
            for (const workspaceFolder of workspaceFolders) {
                let relativePattern = new vscode.RelativePattern(workspaceFolder.uri.path, '**/*.profile-meta.xml');
                vscode.workspace.findFiles(relativePattern, null, 50)
                    .then((uris) => {
                    if (uris === null || uris.length === 0) {
                        panel.webview.postMessage({
                            command: "no-profile",
                            data: null,
                        });
                    }
                    else {
                        uris.forEach((uri) => {
                            const relPath = path.relative(workspaceFolder.uri.path, uri.path);
                            const baseName = path.basename(relPath);
                            const profileName = baseName.substring(0, baseName.indexOf('.'));
                            const folder = `/${relPath.substring(0, relPath.indexOf(baseName))}`;
                            if (!(folder in availableProfilesMap)) {
                                availableProfilesMap = Object.assign(Object.assign({}, availableProfilesMap), { [folder]: [] });
                            }
                            availableProfilesMap = Object.assign(Object.assign({}, availableProfilesMap), { [folder]: [...availableProfilesMap[folder], profileName] });
                        });
                        let startObj = {};
                        availableProfilesMap = Object.keys(availableProfilesMap).sort().reduce((obj, k) => {
                            obj[k] = availableProfilesMap[k];
                            return obj;
                        }, startObj);
                        panel.webview.postMessage({
                            command: "profiles",
                            data: availableProfilesMap,
                        });
                    }
                });
            }
        }
        else {
            panel.webview.postMessage({
                command: "project-not-open",
                data: null,
            });
        }
    }
    revive(panel) {
        this._view = panel;
    }
    _getHtmlForWebview(webview) {
        const styleResetPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css');
        const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css');
        const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'out', 'compiled/Sidebar.js');
        const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
        const stylesPathStylesPath = vscode.Uri.joinPath(this._extensionUri, 'out', 'compiled/Sidebar.css');
        const stylesResetUri = webview.asWebviewUri(styleResetPath);
        const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);
        const stylesStylesUri = webview.asWebviewUri(stylesPathStylesPath);
        const nonce = getNonce_1.getNonce();
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <!--
            Use a content security policy to only allow loading images from https or from our extension directory,
            and only allow scripts that have a specific nonce.
          -->
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="${stylesResetUri}" rel="stylesheet">
          <link href="${stylesMainUri}" rel="stylesheet">
          <link href="${stylesStylesUri}" rel="stylesheet">

          <script nonce="${nonce}">
            const tsvscode = acquireVsCodeApi();
          </script>
        </head>
        <body>
          
          <script nonce="${nonce}" src="${scriptUri}"></script>
        </body>
        </html>`;
    }
}
exports.SidebarProvider = SidebarProvider;
//# sourceMappingURL=SidebarProvider.js.map