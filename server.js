
const express = require("express") ;
const cors = require("cors")  ;
const app = express() ;
const port = 3000 ;
var corsOption = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOption)) ;
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true })) ;
require('./app/routes/auth.js')(app);
app.listen( port,() => console.log("Server is running on port ${PORT}."))


