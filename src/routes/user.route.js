
const {addData} = require('../controllers/user.con');

module.exports = (app) =>{
    app.post('/gub/api/v1/users',addData)
}