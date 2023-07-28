const app = require('./app');

const dbCongig  = require('./src/configs/server.config');  
require('./src/configs/db.config');

//const PORT = 8000;

app.listen(dbCongig.PORT,()=>{
    console.log(`Running On ${dbCongig.PORT}`);
});

