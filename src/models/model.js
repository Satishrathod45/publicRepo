const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    user_id:
    {
        type: String,
        required: true
        
    },
    user_name:
    {
        type:String,
        required: true
        
    },
    password:
    {
        type:String,
        required:true
    }

    }
       
);
const userModel =  mongoose.model('rangappa',userSchema);

module.exports ={
    userModel
}
   