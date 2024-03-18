const express = require('express');

const app = express();

function delay(duration) {
    const start = Date.now();
    while (Date.now() - start < duration);{
        //event loop bloqueado
    }
}

app.get('/', (req, res) => {
    res.send('Perfomance Example');
});

app.get('/timer', (req, res) => {
    delay(5000)
    res.send('Timer Example');
});

app.listen(3000);