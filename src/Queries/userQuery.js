const {userModel}=require('../modules/user.model');

const saveUser=async(userData)=>{
    try {
        const saveUser=new userModel(userData).save();
        return saveUser;
    } catch (error) {
        throw error;
    }
};

const viewUser=async()=>{
    try {
        const viewUser=await userModel.find();
        return viewUser;
    } catch (error) {
        throw error;
    }
};

const viewUserById=async(userId)=>{
    try {
        const viewUserId=await userModel.findById(userId);
        return viewUserId;
    } catch (error) {
        throw error;
    }
};


const updateUserById=async(userId,userData)=>{
    try {
        const updatedUser=await userModel.findByIdAndUpdate(userId,userData);
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const deleteUserById=async(userId)=>{
    try {
        const deleteUser=await userModel.findByIdAndDelete(userId);
        return deleteUser;
    } catch (error) {
        throw error;
    }
};

module.exports={
    saveUser,
    viewUser,
    viewUserById,
    updateUserById,
    deleteUserById
}