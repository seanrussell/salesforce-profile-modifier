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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSCodeCore = void 0;
const vscode = __importStar(require("vscode"));
const osUtils_1 = require("./osUtils");
class VSCodeCore {
    static ensureTerminalExists() {
        if (vscode.window.terminals.length === 0) {
            return false;
        }
        return true;
    }
    static setupTerminal() {
        let activeTerminal;
        if (this.ensureTerminalExists()) {
            activeTerminal = vscode.window.terminals[0];
            if (activeTerminal) {
                activeTerminal.show(true);
            }
        }
        else {
            // Create Terminal via VScode API
            const terminalName = this.terminalName;
            activeTerminal = vscode.window.createTerminal(terminalName);
            activeTerminal.show(true);
        }
        return activeTerminal;
    }
    static getFsPath() {
        let path = '';
        if (vscode.window.activeTextEditor) {
            path = vscode.window.activeTextEditor.document.uri.fsPath;
            if (osUtils_1.OSUtil.isWindowsOs()) {
                path = osUtils_1.OSUtil.toUnixStyle(path); //change to unix style for windows
            }
        }
        return path;
    }
}
exports.VSCodeCore = VSCodeCore;
VSCodeCore.terminalName = 'Salesforce Profile Modifier';
//# sourceMappingURL=vscodeCore.js.map