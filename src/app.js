<<<<<<< HEAD
const express=require('express');
const bodyParser = require("body-parser");
const router = require("./Routes/routes");
require("dotenv").config({ path: "./config/dot.env" });
const app = express();
require("./db/mongoose");
app.use(bodyParser.json());
app.use(router);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
=======
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

>>>>>>> rangappa
