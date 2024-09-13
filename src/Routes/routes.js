const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController");

router.post("/save-user",userController.saveUser);
router.get('/view-user',userController.viewUser);
router.get('/view-user/:id',userController.getUserById);
router.put('/update-user/:id',userController.updateUserById);
router.delete('/delete-user/:id',userController.deleteUser);

module.exports = router;