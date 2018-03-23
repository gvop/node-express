const express = require('express')
const app = express()
const numCPUs = require('os').cpus().length;

app.get('/', (req, res) => {
    res.send({message: 'Hello party people', numCPUs})
})

app.listen(3000, () => console.log('Example app listening on port 8080!'))