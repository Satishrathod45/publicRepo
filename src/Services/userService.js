const userQuery=require('../Queries/userQuery');

const saveUser=async(userData)=>{
    try {
        const saveUser=await userQuery.saveUser(userData);
        return saveUser;
    } catch (error) {
        throw error;
    }
};

const viewUser=async()=>{
    try {
        const viewUsers=await userQuery.viewUser();
        return viewUsers;
    } catch (error) {
        throw error;
    }
};

const viewUserById=async(userId)=>{
    try {
        const UserId=await userQuery.viewUserById(userId);
        return UserId;
    } catch (error) {
        throw error;
    }
};

const updateUser=async(userId,userData)=>{
    try {
        const updateUser=await userQuery.updateUserById(userId,userData);
        return updateUser;
    } catch (error) {
        throw error;
    }
};

const deleteUser=async(userId)=>{
    try {
        const deleteUser=await userQuery.deleteUserById(userId);
        return deleteUser;
    } catch (error) {
        throw error;
    }
};


module.exports={
    saveUser,
    viewUser,
    viewUserById,
    updateUser,
    deleteUser
}