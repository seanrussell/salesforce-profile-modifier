import * as vscode from "vscode";
import * as path from "path";
import { getNonce } from "./getNonce";
import { VSCodeCore } from "./services/vscodeCore";

export class SidebarProvider implements vscode.WebviewViewProvider {
    _view?: vscode.WebviewView;

    constructor(private readonly _extensionUri: vscode.Uri) {}

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        this._view = webviewView;
    
        webviewView.webview.options = {
          enableScripts: true,
          localResourceRoots: [this._extensionUri],
        };
    
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    
        webviewView.webview.onDidReceiveMessage(async (data) => {
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
              console.log('SFDX CMD --> ', cmd);  

              vscode.window.showInformationMessage(JSON.stringify(cmd));
              
              let activeTerminal = VSCodeCore.setupTerminal();
              if(activeTerminal){
                  activeTerminal.sendText(cmd);
                  vscode.window.showInformationMessage('Profiles modified.');
                  this._view?.webview.postMessage({
                    command: 'modify-complete',
                    data: {},
                });
              }
              
              break;
            }
          }
        });

        this.retrieveProfileData(webviewView);
    }

    public retrieveProfileData(panel: vscode.WebviewView) {
      const workspaceFolders = (vscode.workspace.workspaceFolders) ? vscode.workspace.workspaceFolders : [];
        
      let availableProfilesMap:{ [key: string]: any } = {};
      console.log('WORKSPACE FOLDERS: ', workspaceFolders);
      if (workspaceFolders.length > 0) {
        for (const workspaceFolder of workspaceFolders) {
          let relativePattern: vscode.RelativePattern = new vscode.RelativePattern(workspaceFolder.uri.path, '**/*.profile-meta.xml');
          
          vscode.workspace.findFiles(relativePattern, null, 50)
            .then((uris: vscode.Uri[]) => {
              if (uris === null || uris.length === 0) {
                panel.webview.postMessage({
                  command: "no-profile",
                  data: null,
                });
              } else {
                uris.forEach((uri: vscode.Uri) => {    
                  const relPath = path.relative(workspaceFolder.uri.path, uri.path); 
                  const baseName = path.basename(relPath);
                  const profileName = baseName.substring(0, baseName.indexOf('.'));
                  const folder = `/${relPath.substring(0, relPath.indexOf(baseName))}`;
                  
                  if (!(folder in availableProfilesMap)) {
                    availableProfilesMap = {
                      ...availableProfilesMap,
                      [folder]: []
                    };
                  } 
                  availableProfilesMap = {
                    ...availableProfilesMap,
                    [folder]: [ ...availableProfilesMap[folder], profileName ]
                  };
                });
                console.log('AVAIL PROFS: ', availableProfilesMap);
                panel.webview.postMessage({
                    command: "profiles",
                    data: availableProfilesMap,
                });
              }
            });
        }
      } else {
        panel.webview.postMessage({
          command: "project-not-open",
          data: null,
        });
      }
    }
    
    public revive(panel: vscode.WebviewView) {
      this._view = panel;
    }

    private _getHtmlForWebview(webview: vscode.Webview) {

      const styleResetPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css');
      const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css');

      const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'out', 'compiled/Sidebar.js');
      const scriptUri = webview.asWebviewUri(scriptPathOnDisk);

      const stylesPathStylesPath = vscode.Uri.joinPath(this._extensionUri, 'out', 'compiled/Sidebar.css');

      const stylesResetUri = webview.asWebviewUri(styleResetPath);
      const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);
      const stylesStylesUri = webview.asWebviewUri(stylesPathStylesPath);

      const nonce = getNonce();

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
