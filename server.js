const app = require('./app');

const dbCongig  = require('./src/configs/server.config');  
require('./src/configs/db.config');
require('./src/routes/user.route')(app);

//const PORT = 8000;

app.listen(dbCongig.PORT,()=>{
    console.log(`Running On ${dbCongig.PORT}`);
});

