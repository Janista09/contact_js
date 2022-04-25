const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name: String,
    email: String,
    nameTH: String,
    group: String
});

module.exports = mongoose.model('tb_teacher', teacherSchema);