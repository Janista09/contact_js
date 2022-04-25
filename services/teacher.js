const teacherModel = require('../models/teacher');
exports.findteacher = async () =>{
    return await teacherModel.find();
}

exports.createteacher = async (name,email,nameTH,group) =>{
    const teacher = new teacherModel({
        name: name,
        email: email,
        nameTH: nameTH,
        group: group
    });
    return await teacher.save();
}
