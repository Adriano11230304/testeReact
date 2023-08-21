const express = require('express');
const { isAuth } = require('../middlewares/middlewares');
const userRouter = express.Router();
const UserController = require('../controllers/UserController');
const userController = new UserController;

userRouter.post('/userAuth', userController.userAuth);
userRouter.get('/', userController.list);

module.exports = userRouter;