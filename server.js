const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs-mate")
const cors = require ("cors")
const nodemailer = require("nodemailer")
const port = 5000
const app = express()

const routeIndex = require ("./route")

app.engine("ejs", ejs)
app.set('view engine', "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(__dirname + "/images"))
app.use(express.static(__dirname + "/assets"))

app.use("/", routeIndex)

//envoie de l'email

app.listen(port, () => { console.log(`server connecter sur le prot ${port}`) })