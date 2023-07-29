const User = require('../models/user.model');

const addData = async(req,res) =>{
    const dataObj = {
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        collegeName:req.body.collegeName,
        course:req.body.course,
        passingYear:req.body.passingYear
    
    }
    try{
        const udata = User.create(dataObj);
        return res.status(201).send(dataObj);
    }catch(err){
        return res.status(500).send("Some Error");
    };
};


module.exports = {
    addData
};