const electron = require("electron");
const { webContents, BrowserView } = electron; // https://www.electronjs.org/docs/api/browser-view

exports.createBrowserView = (mainWindow) => {
    const view = new BrowserView();
    //mainWindow.setBrowserView(view);
    mainWindow.maximize();
    //view.setBounds({ x: 0, y: 0, width: 1024, height: 768 });
    view.webContents.loadURL("https://www.figma.com/files/recent");
    view.webContents.insertCSS('@import url("https://raw.githubusercontent.com/Mart1M/DarkUIFigma/master/content.css');
};