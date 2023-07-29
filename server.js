const app = require('./app');

const mongo = require('mongoose');
const dbCongig  = require('./src/configs/server.config');  

//require('./src/configs/db.config');
require('./src/routes/user.route')(app);



mongo.connect(dbCongig.DB)
.then(()=>console.log(`DB connected`))
.catch((err)=>console.log(err));


//const PORT = 8000;

app.listen(dbCongig.PORT,()=>{
    console.log(`Running On ${dbCongig.PORT}`);
});

