const express = require('express')
const router = express.Router()

let userController= require('../controller/userController')

router.get('/user',userController.getUser);
router.get("/user/:id",userController.getUserById);
router.post('/user',userController.createUser);
router.patch("/user/:id",userController.updateUser);
router.delete("/user/:id",userController.deleteUser);

module.exports=router;