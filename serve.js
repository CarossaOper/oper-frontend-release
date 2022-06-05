const express = require("express")
const path = require("path")
const serveStatic = require("serve-static")
const GhostContentAPI = require('@tryghost/content-api');

const app = express()

app.use("/", serveStatic(path.join(__dirname, "./dist")))

const port = process.env.PORT
app.listen(port)

console.log(`🚀 Launched page on port ${port}`)