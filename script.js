const express = require('express')
const moment = require("moment")

const HOST = 'localhost'
const PORT = 8000

const app = express()

app.get('/', (req, res) => {
    res.status(200).json("Hello World")
})

app.get('/Bohdan', (req, res) => {
    res.status(200).json("Bohdan Novikov")
})

app.get('/health', (req, res) => {
    res.status(200).json(
        {
            "status": "ok",
        }
    )
})

app.get('/stats', (req, res) => {
    res.status(200).json(
        {
            "uptime": process.uptime(),
            "nodeVersion": process.version,
            "timestamp": moment().format("YYYY-MM-DD"),
        }
    )
})

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})

