const mongo = require('mongoose');

const UserSch = new mongo.Schema({
    name:{
        type:String
    },
    number:{
        type:Number
    },
    email:{
        type:String
    },
    collegeName:{
        type:String
    },
    course:{
        type:String
    },
    passingYear:{
        type:Number
    }
});

const User = mongo.model("userdata",UserSch);

module.exports = User;

// {
//     "name":"Antar",
//     "email":"ab@gamil.com",
//     "contactNumber":34556,
//     "collegeName":"abc",
//     "course":"bc",
//     "passingYear":2000
//   }