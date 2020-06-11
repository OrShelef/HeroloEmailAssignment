

const express=require('express');
const controller=require('../controllers/authController');
const router=express.Router();

router
.post('/Login',controller.Login)
.post('/Logout',controller.Logout)
.get('/',controller.Get);

module.exports=router;