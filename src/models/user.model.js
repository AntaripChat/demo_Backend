// const mongo = require('mongoose');

// const Users = mongo.Schema({
//     name:{
//         typeof:String,
    
//     },
//     email:{
//         typeof:String,
    
//     },
//     contactNumber:{
//         typeof:Number,
    
//     },
//     collegeName:{
//         typeof:String,
    
//     },
//     course:{
//         typeof:String,
    
//     },
//     passingYear:{
//         typeof:Number,
    
//     }
// });

// const Data = mongo.model("User", Users);

// module.exports = Data;

const mongo = require('mongoose');

const datas = mongo.Schema({
    name:{
        typeof:String
    },
    rollnumber:{
        typeof:Number
    }
});


const data = mongo.model('data',datas);

module.exports = data;