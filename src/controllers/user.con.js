const data = require('../models/user.model');


const userData = async(req,res) =>{

    const userObj = {
        name:req.body.name,
        // email:req.body.email,
        // contactNumber:req.body.contactNumber,
        // collegeName:req.body.collegeName,
        // course:req.body.course,
        // passingYear:req.body.passingYear,
        
    };
    console.log(userObj);
    try{
        const user = await data.create(userObj);
        
        return res.status(201).send(userObj);

    }catch(e){
        return res.status(500).send({message:"Internal Server Error!"});
    }


}

module.exports = {
    userData
}