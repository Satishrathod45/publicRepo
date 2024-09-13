const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
   {
    user_id: 
    {
      type: String,
      required: true,
      unique: true
    },
    user_name:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    location:{
        type:String,
        required:true
    }
   }
);
const userModel = mongoose.model('user', userSchema);

module.exports = {
    userModel
}