const express = require("express")
const serveIndex = require("serve-index")

const app = express()

app.use(
    '/ftp',
    express.static("public/ftp"),
    serveIndex('public/ftp', {icons:true})
)

app.listen(80, ()=>console.log("On port "))