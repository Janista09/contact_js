const memberModel = require('../models/member');
exports.findmember = async () =>{
    return await memberModel.find();
}

exports.createmember = async (fname,lname,email,username,password) =>{
    const member = new memberModel({
        fname: fname,
        lname: lname,
        email: email,
        username: username,
        password: password
    });
    return await member.save();
}