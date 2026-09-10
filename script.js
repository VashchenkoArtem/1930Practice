const express = require('express')

const HOST = 'localhost'
const PORT = 8000

const app = express()

app.get('/Ivan', (req, res) => {
    res.status(200).json("Hello! My name is Ivan. I am 13 years old and I am a student in WorldIT Academy.")
})

app.get('/Alina', (req, res) => {
    res.status(200).json({ 
        name: "Alina Sorukhan",
        age: 14
    })
})


app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})
