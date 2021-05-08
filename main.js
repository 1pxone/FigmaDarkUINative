// Utilities
const path = require("path");
const fs = require("fs");
const { ipcRenderer } = require('electron');
const { autoUpdater } = require('electron-updater');
const { BrowserWindow, ipcMain } = require('electron');

// Electron
const { app, Menu } = require("electron");
require("@electron/remote/main").initialize();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on("ready", () => {
    // Main window
    const window = require("./src/window");
    mainWindow = window.createBrowserWindow(app);

    // Option 1: Uses Webtag and load a custom html file with external content
    //mainWindow.loadURL(`file://${__dirname}/index.html`);


    // Option 2: Load directly an URL if you don't need interface customization
    mainWindow.loadURL("https://www.figma.com/files/recent");
    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.webContents.insertCSS(fs.readFileSync(path.join(__dirname, 'assets/css/content.css'), 'utf8'));
    });

    // Option 3: Uses BrowserView to load an URL
    //const view = require("./src/view");
    //view.createBrowserView(mainWindow);

    // Display Dev Tools
    //mainWindow.openDevTools();

    // Menu (for standard keyboard shortcuts)
    const menu = require("./src/menu");
    const template = menu.createTemplate(app.name);
    const builtMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(builtMenu);

    mainWindow.once('ready-to-show', () => {
        autoUpdater.checkForUpdatesAndNotify();
    });
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    app.quit();
});