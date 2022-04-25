const express = require('express');
const { getmember, createmember , deletemember} = require('../controllers/member')
const route = express.Router();

route.get('/',getmember);
route.post('/',createmember);
route.post('/:id',deletemember);

module.exports = route;