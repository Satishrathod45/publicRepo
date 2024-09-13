const express  =  require("express");
const router = express.Router();
const userController = require("../controller/controller");

router.post('/user-register',userController.saveUser);
router.get('/view-users',userController.viewUsers);
router.put('/update-user/:id',userController.updateUser);
router.delete('/delete-user/:id',userController.deleteUser);
module.exports= {
    router
};