const express = require('express')

const HOST = 'localhost'
const PORT = 8000

const app = express()

app.get('/', (req, res) => {
    res.status(200).json("Hello World from kirill")
})

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})