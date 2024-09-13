const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
require("dotenv").config({path:"./config/dev.env"});
const {router} = require("./router/router");
const app = express();

app.use(bodyParser.json());
app.use(router);
const port = process.env.PORT | 5050;
app.listen(port, ()=>{
    console.log("Server Running at Port 5000 ");
    
})

