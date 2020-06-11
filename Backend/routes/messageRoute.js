

const express=require('express');
const controller=require('../controllers/messageController');
const router=express.Router();


router
.get('/',controller.Get)
.post('/',controller.Post)
.delete('/:messageId',controller.Delete);

module.exports=router;