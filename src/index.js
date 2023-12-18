const { CreateWindow } = require ('./app')

const { app } = require('electron')
/* require("./database") */

app.whenReady().then(CreateWindow)