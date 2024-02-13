const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',

}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(planetsRouter);
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;

async function startSerVER(){
    skehnnsajdkhqwkjehqwehoiuq2y312oi3uy1oi3y1u2oi3u12o3iu123oi1u23oi12u3o1i2u3o1i2u31o2i3u1o2i3u12oi3u1o2i3
}