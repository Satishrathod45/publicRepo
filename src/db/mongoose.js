const mongoose=require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
    console.log("mongoose connected successfully");
    
})