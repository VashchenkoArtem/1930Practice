const express = require('express')

const HOST = 'localhost'
const PORT = 8000

const app = express()

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok'
    })
})

app.get('/stats', (req, res) => {
    res.status(200).json({
        uptime: Math.floor(process.uptime()),
        nodeVersion: process.version,
        timestamp: new Date().toISOString()
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})