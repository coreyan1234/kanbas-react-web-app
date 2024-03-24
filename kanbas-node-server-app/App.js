import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
const app = express()
Lab5(app)
Hello(app)
app.listen(4000)