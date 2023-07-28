const mongo = require('mongoose');
const dbCongig = require('./server.config');

mongo.connect(dbCongig.DB)
.then(()=>console.log(`DB connected`))
.catch((err)=>console.log(err));

