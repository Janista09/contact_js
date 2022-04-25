const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    username: String,
    password: String
});

module.exports = mongoose.model('tb_members', memberSchema);