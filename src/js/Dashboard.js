const { ipcRenderer } = require('electron')

function AbrirVentana() {
    ipcRenderer.send("llamarVentana")
}