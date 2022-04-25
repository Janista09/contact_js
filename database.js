const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/admin')
    .then(() => {
        console.log('connect success')
    })
    .catch((err) => {
        console.log('connect error -> ', err);
    })

module.exports = db;
