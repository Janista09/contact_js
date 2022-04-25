const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://admin:RYArpb11146@node31370-contact-js.app.ruk-com.cloud:11256/admin')
    .then(() => {
        console.log('connect success')
    })
    .catch((err) => {
        console.log('connect error -> ', err);
    })

module.exports = db;
