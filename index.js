const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World -- this is from actions!')
})

module.exports = app;