const { CreateWindow } = require ('./app')

const { app } = require('electron')
app.whenReady().then(CreateWindow)