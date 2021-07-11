import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "salesforce-profile-modifier" is now active!');

	const sidebarProvider = new SidebarProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("salesforce-profile-modifier-sidebar", sidebarProvider)
	);
}

export function deactivate() {}