const userQuery = require("../queries/query");

const saveUser = async(body) => {
    try { 

        const {userId,userName,password}=body;
        const data={user_id:userId,user_name:userName,password}
        const result = await userQuery.saveUser(data);
        return result;
    } catch (error) {
        throw error;
    }
}
const viewUsers = async () => {
    try {
        const viewdUsers = await userQuery.viewUsers();
        return viewdUsers;
    } catch (error) {
        throw error;
    }
}

const updateUser = async (id, updateData) => {
    try {
        const updatedUser = await userQuery.updateUser(id, updateData);
        return updatedUser;
    } catch (error) {
        throw error;
    }
}

const deleteUser = async(id) => {
    try {
        const deletedUser = await userQuery.deleteUser(id);
        return deletedUser
    } catch (error) {
        throw error;
    }
}
module.exports= {
    saveUser,
    viewUsers,
    updateUser,
    deleteUser
}