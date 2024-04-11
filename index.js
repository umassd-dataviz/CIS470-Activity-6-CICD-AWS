const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World -- this is from actions!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))


module.exports = app;