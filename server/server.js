const express = require("express")
const serveStatic = require("serve-static")
const path = require("path")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const router = require("./api/api.js")

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error running Mongoose:"));

const app = express()

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

app.use("/", serveStatic(path.join(__dirname, "../dist")))
app.use("/api", router)

const port = process.env.PORT || 8080
app.listen(port)

console.log(`Launched page with port ${port}`)