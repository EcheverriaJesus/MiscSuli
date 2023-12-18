const { BrowserWindow } = require('electron')

const openWindow = {}

function createWindow(options) {

    if (openWindow[options.loadFile]) {
        openWindow[options.loadFile].focus()
        return openWindow[options.loadFile]
    }

    const window = new BrowserWindow({
        width: options.width,
        height: options.height,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModules: true,
            contextIsolation: false
        }
    })
    if (options.maximize) {
        window.maximize()
    }
    window.loadFile(options.loadFile)
    window.on('closed', () => {
        delete openWindow[options.loadFile]
    })
    openWindow[options.loadFile] = window
    return window
}

module.exports = {
    createWindow
}