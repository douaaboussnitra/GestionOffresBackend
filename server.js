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

app.get("/",(req,res)=>  {
     
  
 res.json({ message: "Welcome to bezkoder application." });
})

app.listen( port,() => console.log("Server is running on port ${PORT}."))

