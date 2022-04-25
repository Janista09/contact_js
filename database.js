const mongoose = require('mongoose');

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/admin';

const db = mongoose.connect(url);

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

mongoose.connection.once('open',() =>{
    console.log("[DB] Connecting Success");
});

module.exports = db;
