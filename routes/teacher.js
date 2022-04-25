const express = require('express');
const { getteacher, createteacher } = require('../controllers/teacher')
const route = express.Router();

route.get('/',getteacher);
route.post('/',createteacher);

module.exports = route;