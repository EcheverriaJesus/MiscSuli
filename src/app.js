const { app, ipcMain } = require('electron')
const { createWindow } = require('./utils/windowUtils')
require('electron-reload')(__dirname)

app.whenReady().then(createWindow)

let mainWindow

app.on('ready', () => {
    const mainWindow = createWindow({
        width: 8000,
        height: 600,
        maximize: true,
        loadFile: 'src/views/Dashboard.html'
    })

    ipcMain.on('llamarVentana', () => {
        createWindow({
            width: 600,
            height: 500,
            maximize: true,
            loadFile: 'src/views/Dashboard.html'
        })
    })

    mainWindow.on('closed', () => {
        app.quit()
    })

})