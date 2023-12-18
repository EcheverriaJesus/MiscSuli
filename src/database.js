const mongoose = require=("mongoose")

mongoose.connect("mongodb://atlas-sql-64d169ea2100ec2b15a1edd8-poijn.a.query.mongodb.net/nombre_de_tu_base_de_datos?ssl=true&authSource=admin")
.then((db) => console.log("Se conecto a la BD de mongo"))
.catch((error) => console.log(error))