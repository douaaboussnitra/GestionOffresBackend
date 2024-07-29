module.exports=app=>{
const auth = require('../controllers/auth')
var router = require("express").Router();
router.post('/login', auth.login)
}