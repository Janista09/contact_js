const res = require("express/lib/response");

const memberService = require('../services/member');

exports.getmember = async function getmember(req,res){
    const data = await memberService.findmember();
    res.status(200).json(data);
}

exports.createmember = async(req,res) => {
    try{
        const body = req.body;
        await memberService.createmember(body.fname,body.lname,body.email,body.username,body.password);
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

exports.deletemember = async (req,res) =>{
    const id = req.param.id;
    console.log(id );
    res.json({
        status: true,
        message: "Remove success"
    })
}