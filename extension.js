// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	
	let disposable = vscode.commands.registerCommand('code-snippets-of-xuanzhi33-cn.openWebsite', function () {
		// The code you place here will be executed every time your command is executed

		// open xuanzhi33.cn
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://www.xuanzhi33.cn'));
		
	});

	context.subscriptions.push(disposable);

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
