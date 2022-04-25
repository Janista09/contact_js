const res = require("express/lib/response");

const teacherService = require('../services/teacher');

exports.getteacher = async function getteacher(req,res){
    const data = await teacherService.findteacher();
    res.status(200).json(data);
}

exports.createteacher = async(req,res) => {
    try{
        const body = req.body;
        await teacherService.createteacher(body.name,body.email,body.nameTH,body.group);
        res.status(201).json({
            status: true,
            message: "Created"
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: err
        });
    }
}