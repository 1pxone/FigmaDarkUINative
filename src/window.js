const path = require("path");
const { BrowserWindow } = require("electron"); // https://www.electronjs.org/docs/api/browser-window

exports.createBrowserWindow = (app) => {
    // https://www.electronjs.org/docs/api/browser-window#class-browserwindow
    return new BrowserWindow({
        width: 1920,
        height: 1080,
        maximizable: true,
        icon: path.join(__dirname, "assets/icons/png/64x64.png"),
        //titleBarStyle: 'hidden',
        //frame: false,
        webPreferences: {
            devTools: true, // false if you want to remove dev tools access for the user
            contextIsolation: true,
            nodeIntegration: true,
            enableRemoteModule: true, // required for print function [removed since Electron 12, uses https://github.com/electron/remote]
            webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag, // required for print function
        },
    });
};