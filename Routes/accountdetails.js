const express = require('express');
const router = express.Router();
const AccountDetails = require('../Models/accountSchema');

//get all details
router.get('/',async (req,res)=>{

    try{
        const acc = await AccountDetails.find();
        res.json(acc);
    }catch(err){
        res.json({message:err})
    }
})

//get specific item
router.get('/:id',async (req,res)=>{
    try{
        const specificAccount = await AccountDetails.findById(req.params.id);
        res.json(specificAccount);
    }catch(err){
        res.json({message:err});
    }
})

//submit details
router.post('/',(req,res)=>{
    const account = new AccountDetails({
        accountid:req.body.accountid,
        gamingalies:req.body.gamingalies,
        realname:req.body.realname,
        image:req.body.image,
        desc:req.body.desc,
        whatsapp:req.body.whatsapp,
        email:req.body.email,
        mobile:req.body.mobile,

    });

    member.save()
        .then(data=>{
            res.json(account);
        })
        .catch(err=>{
            res.json({message:err})
        })
})

//update details
router.post('/:id',async (req,res)=>{
    try{
        const updateAccount =await AccountDetails.updateOne({_id:req.params.id},
            {$set : {
                accountid:req.body.accountid,
                gamingalies:req.body.gamingalies,
                realname:req.body.realname,
                image:req.body.image,
                desc:req.body.desc,
                whatsapp:req.body.whatsapp,
                email:req.body.email,
                mobile:req.body.mobile,
            }});

        res.json(updateAccount);


    }catch(err){
        res.json({message:err});
    }
})

//delete details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteAccount =await AccountDetails.remove({_id: req.params.id});
        res.json(deleteAccount);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;