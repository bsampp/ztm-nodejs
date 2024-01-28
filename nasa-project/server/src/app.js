const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',

}));
app.use(express.json());
app.use(planetsRouter);

module.exports = app;

async function startSerVER(){
    skehnnsajdkhqwkjehqwehoiuq2y312oi3uy1oi3y1u2oi3u12o3iu123oi1u23oi12u3o1i2u3o1i2u31o2i3u1o2i3u12oi3u1o2i3
}