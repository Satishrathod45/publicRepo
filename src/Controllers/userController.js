const userService=require('../Services/userService');


const saveUser=async(req,res)=>{
    try {
        const savedUser=await userService.saveUser(req.body);
        return res.status(200).send(savedUser);
    } catch (error) {
        console.log(error);
        
        return res.status(500).send("Error when posting user");
    }
};

const viewUser=async(req,res)=>{
    try {
        const vieweddUser=await userService.viewUser();
        return res.status(200).send(vieweddUser);
    } catch (error) {
        return res.status(500).send("Error when getting user");
    }
};


const getUserById=async(req,res)=>{
    try {
        const getUser=await userService.viewUserById(req.params.id);
        if(!getUser){
            return res.status(404).send("user not found");
        }
        return res.status(200).send(getUser);
    } catch (error) {
        return res.status(500).send("Error when getting user");
    }
};

const updateUserById=async(req,res)=>{
    try {
        const updateUser=await userService.updateUser(req.params.id,req.body);
        if(!updateUser){
            return res.status(404).send("user not found");
        }
        return res.status(200).send(updateUser);
    } catch (error) {
        return res.status(500).send("Error when updating user");
    }
};

const deleteUser=async(req,res)=>{
    try {
        const deleteUser=await userService.deleteUser(req.params.id);
        if(!deleteUser){
            return res.status(404).send("user not found");
        }
        return res.status(200).send("user delete successfully");
    } catch (error) {
        return res.status(500).send("Error when deleting user");
    }
};

module.exports={
    saveUser,
    viewUser,
    getUserById,
   updateUserById,
   deleteUser

}