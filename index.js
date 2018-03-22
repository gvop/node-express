const express = require('express')
const app = express()

app.get('/', (req, res) => {
    setTimeout(function () {
        throw new Error('We crashed!!!!!');
  }, 10);
})

app.listen(3000, () => console.log('Example app listening on port 8080!'))