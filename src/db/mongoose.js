<<<<<<< HEAD
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
    console.log("mongoose connected successfully");
    
})
=======
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://simanchala:xA6vsgeVUpGbFW0Y@cluster0.horp5xz.mongodb.net/Examples?retryWrites=true&w=majority&appName=Cluster0",{
    serverSelectionTimeoutMS: 60000,
  autoCreate: false,
});
>>>>>>> rangappa
