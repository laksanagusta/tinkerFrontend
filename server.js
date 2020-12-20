const express = require("express")
const app = express()
const PORT = 5000
const path = require("path")

app.use(express.static(path.join(__dirname, "client", "build")))

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log('itsworking')
});
