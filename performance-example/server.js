const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration) {
    const start = Date.now();
    while (Date.now() - start < duration);{
        //event loop bloqueado
    }
}

app.get('/', (req, res) => {
    res.send(`Perfomance Example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000)
    res.send(`Timer Example ${process.pid}`);
});

console.log(`Worker ${process.pid} started`);
app.listen(3000);

