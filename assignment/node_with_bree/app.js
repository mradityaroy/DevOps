const express = require('express');
const app = express()
const Bree = require('bree')

const bree = new Bree({
    jobs: [{
        name: 'sender',
        interval: '20s',
    }]
})

bree.start();
app.listen(3000, ()=> console.log("Listening to port 3000"))