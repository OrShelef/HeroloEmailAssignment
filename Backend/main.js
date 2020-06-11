

const express = require('express')
const app = express()
const cors=require('cors');
const bodyParser = require('body-parser');
const devenv=require('dotenv');
const authRouter=require('./routes/authRoute');
const messageRouter=require('./routes/messageRoute');
const {promisify} =require('util');
const jwt=require('jsonwebtoken');
const port = process.env.PORT ||  3333;



app.use(express.static(__dirname +'/public'))
devenv.config({path:'./config.env'});
app.use(cors());
app.use(bodyParser.json());


app.use('/Auth',authRouter);
app.use(async (req,res,next)=>{

    try{

    let token;
   
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        token=req.headers.authorization.split(' ')[1]; 
    }

    if(!token)return res.status(401).json({status:'fail',message:'You are not logged in!'});

    const decoded=await promisify(jwt.verify)(token,process.env.JWT_SECRET);
     req.userId=decoded.id;
   
     next();
}catch(err){
    console.log(err);
    next(err);
}

})
app.use('/Messages',messageRouter);



app.listen(port, () => console.log(`listening at http://localhost:${port}`));