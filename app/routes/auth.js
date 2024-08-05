module.exports=app=>{
const auth = require('../controllers/auth')
const router = require("express").Router();
router.post('/login', auth.login)
router.post('/register', auth.register)
app.use("/api/auth",router)
}