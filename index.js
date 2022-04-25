const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');

const db = require('./database');

// const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_POST || '3000';

const route = require('./routes/route');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(__dirname + "/www"));
app.use(route);

app.listen(port, () => {
    console.log("Start Server on Port " + port);
});
