const userService = require("../services/service");

const saveUser = async(req, res) => {
    try {
        const result = await userService.saveUser(req.body);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        
        return res.status(500).send(error)
    }
}

const viewUsers = async(req, res) => {
    try {
        const result = await userService.viewUsers();
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send(error)
    }
}

const updateUser = async(req,res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const result = await userService.updateUser(id, updateData);
        return res.status(200).send(result)
    } catch (error) {
        console.log(error);
        
        return res.status(500).send(error);
    }
}
const deleteUser = async (req, res) => {
    try {
        const result  = await userService.deleteUser(req.params.id);
        return res.status(200).send(result); 
    } catch (error) {
        return res.status(500).send(error);
    }
}
module.exports = {
    saveUser,
    viewUsers,
    updateUser,
    deleteUser
}