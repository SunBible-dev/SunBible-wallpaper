// The "BrowserWindow" class is the primary way to create user interfaces
// in Electron. A BrowserWindow is, like the name suggests, a window.
//
// For more info, see:
// https://electronjs.org/docs/api/browser-window

const { app, BrowserWindow } = require('electron')



app.whenReady().then(() => {

    const mainWindow = new BrowserWindow({
        resizable: false,
        alwaysOnTop: true,
        maximizable: false,
        minimizable: true,
        width: 800,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    })

    // Load our index.html
    mainWindow.loadFile('index.html')
    mainWindow.removeMenu()




})
