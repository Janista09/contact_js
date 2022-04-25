
const express = require('express');
const route = express.Router();

const member = require('./member');
const teacher = require('./teacher');

route.use('/member',member)
route.use('/teacher',teacher)

module.exports = route;