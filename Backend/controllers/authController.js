
const json=require('jsonfile');
const jwt=require('jsonwebtoken');

exports.Login=async (req,res,next) => {


    json.readFile('../public/Users.json',(err,data)=>{
        if(err) return res.status(404).json({status:'fail',message:err});

        const user=data.filter(user=>user.id==req.body.id);
        console.log(process.env.JWT_SECRET);
        
        if(user)
        {
            const token=jwt.sign({id:req.body.id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN});
            res.status(200).json({
                status:'success',
                token,
                user
            });
        }
        })

    }
  

exports.Logout=async (req,res,next)=>{

}

exports.Get=(req,res,next)=>{
    json.readFile('./Users.json',(err,data)=>{
        if(err) return res.status(404).json({status:'fail',message:err});
        res.status(200).json({
                status:'success',
                users:data
            });
        
        })
}
