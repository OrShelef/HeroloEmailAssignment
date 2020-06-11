
const json=require('jsonfile');


exports.Get=(req,res)=>{
    json.readFile('./Messages.json',(err,data)=>
    {
        if(err) return res.status(404).json({status:'fail',message:err});

        let messages=data.filter(msg=>msg.senderID==req.userId || msg.to==req.userId);

        res.status(200).json({status:'success',messages});
    })
}

exports.Post=(req,res)=>
{
  
    json.readFile('./Messages.json',(err,data)=>
    {
        if(err){
            res.status(404).json({status:'fail',message:err});
            return;
        }
        let messages=[...data];
        messages.push(req.body);
        json.writeFile('./Messages.json',messages).then(result=>
            {
                res.status(200).json({status:'success',data:req.body});
            }).catch(err=>{
                res.status(404).json({status:'fail',message:err});
                
            });
        
         
    })
}

exports.Delete=(req,res)=>
{ 
    json.readFile('./Messages.json',(err,data)=>
    {
        if(err) return res.status(404).json({status:'fail',message:err});
        let messages=data.filter(msg=>msg.senderID==req.userId || msg.to==req.userId).filter(m=>m.id!=req.params.messageId);
        json.writeFile('./Messages.json',messages,(err=>res.status(404).json({status:'fail',message:err})));
         res.status(200).json({status:'success',messages});
    })
}