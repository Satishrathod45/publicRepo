const {userModel} = require("../models/model");

const saveUser= async(userDetails) =>{
    try {
        const savedUser = await new userModel(userDetails).save();
        return savedUser;
    } catch (error) {
        throw error ; 
    }
}

const viewUsers = async() =>{
    try {
        const viewedUsers = await userModel.find();
        return viewedUsers;
    } catch (error) {
        throw error;
        
    }
}
const updateUser = async(id, updateData) =>{
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, updateData)
        return updatedUser;
    } catch (error) {
        throw error
    }
}

const deleteUser = async(id)=> {
    try {
        const deleteUser = await userModel.findByIdAndDelete(id);
        return deleteUser;
    } catch (error) {
        throw error;
    }

}
module.exports = {
    saveUser,
    viewUsers,
    updateUser,
    deleteUser
}