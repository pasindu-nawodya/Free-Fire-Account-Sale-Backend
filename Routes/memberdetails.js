const express = require('express');
const router = express.Router();
const MemberDetails = require('../Models/teamMembersTable');

//get all details
router.get('/',async (req,res)=>{

    try{
        const guildMem = await MemberDetails.find();
        res.json(guildMem);
    }catch(err){
        res.json({message:err})
    }
})

//get specific item
router.get('/:id',async (req,res)=>{
    try{
        const specificMember = await MemberDetails.findById(req.params.id);
        res.json(specificMember);
    }catch(err){
        res.json({message:err});
    }
})

//submit details
router.post('/',(req,res)=>{
    const member = new MemberDetails({
        playerid:req.body.playerid,
        gamingalies:req.body.gamingalies,
        realname:req.body.realname,
        image:req.body.image,
        contactdetails:req.body.contactdetails,
        position:req.body.position,

    });

    member.save()
        .then(data=>{
            res.json(member);
        })
        .catch(err=>{
            res.json({message:err})
        })
})

//update details
router.post('/:id',async (req,res)=>{
    try{
        const updateMember =await MemberDetails.updateOne({_id:req.params.id},
            {$set : {
                playerid:req.body.playerid,
                gamingalies:req.body.gamingalies,
                realname:req.body.realname,
                image:req.body.image,
                contactdetails:req.body.contactdetails,
                position:req.body.position,
            }});

        res.json(updateMember);


    }catch(err){
        res.json({message:err});
    }
})

//delete details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteMember =await MemberDetails.remove({_id: req.params.id});
        res.json(deleteMember);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;