const express = require('express')

const HOST = 'localhost'
const PORT = 8000

const app = express()

app.get('/', (req, res) => {
    
})

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})