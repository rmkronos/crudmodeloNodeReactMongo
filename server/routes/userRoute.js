const express = require('express');

const userRoute = require('../controller/userController.js');

const route = express.Router();

route.get('/user', userRoute.index);
route.post('/user-create', userRoute.create);
route.get('/user-edit/:id', userRoute.getUserById);

module.exports = route;