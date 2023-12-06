const { BrowserWindow } = require('electron')

let window

function CreateWindow () {
    window = new BrowserWindow({
       /*  width: 800,
        height: 600, */
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.maximize()
    window.loadFile('src/views/Dashboard.html')
}

module.exports ={
    CreateWindow
}