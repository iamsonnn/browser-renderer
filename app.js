const express = require('express')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const indexRouter = require('./routes/index')

const app = express()

app.use(express.urlencoded({extended: false}))

app.use('/', indexRouter)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

