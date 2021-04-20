const express = require('express');
const router = express.Router();
const GuildDetails = require('../Models/guilddetailstable');

//get all details
router.get('/',async (req,res)=>{

    try{
        const guild = await GuildDetails.find();
        res.json(guild);
    }catch(err){
        res.json({message:err})
    }
})

//get specific item
router.get('/:id',async (req,res)=>{
    try{
        const specificGuild = await GuildDetails.findById(req.params.id);
        res.json(specificGuild);
    }catch(err){
        res.json({message:err});
    }
})

//submit details
router.post('/',(req,res)=>{
    const guild = new GuildDetails({
        guildid:req.body.guildid,
        guildname:req.body.guildname,
        leaderid:req.body.leaderid,// player 1
        leadergamingname:req.body.leadergamingname,
        leaderrealname:req.body.leaderrealname,
        leaderlevel:req.body.leaderlevel,
        leadermobile:req.body.leadermobile,
        leaderemail:req.body.leaderemail,
        playertwoid:req.body.playertwoid,// player 2
        playertwoname:req.body.playertwoname,
        playertworealname:req.body.playertworealname,
        playertwolevel:req.body.playertwolevel,
        playertwomobile:req.body.playertwomobile,
        playerthreeid:req.body.playerthreeid,// player 3
        playerthreename:req.body.playerthreename,
        playerthreerealname:req.body.playerthreerealname,
        playerthreelevel:req.body.playerthreelevel,
        playerthreemobile:req.body.playerthreemobile,
        playerfourid:req.body.playerfourid,//player 4
        playerfourname:req.body.playerfourname,
        playerfourrealname:req.body.playerfourrealname,
        playerfourlevel:req.body.playerfourlevel,
        playerfourmobile:req.body.playerfourmobile,

    });

    guild.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
})

//update details
router.post('/:id',async (req,res)=>{
    try{
        const updateGuild =await GuildDetails.updateOne({_id:req.params.id},
            {$set : {
                guildid:req.body.guildid,
                guildname:req.body.guildname,
                leaderid:req.body.leaderid,// player 1
                leadergamingname:req.body.leadergamingname,
                leaderrealname:req.body.leaderrealname,
                leaderlevel:req.body.leaderlevel,
                leadermobile:req.body.leadermobile,
                leaderemail:req.body.leaderemail,
                playertwoid:req.body.playertwoid,// player 2
                playertwoname:req.body.playertwoname,
                playertworealname:req.body.playertworealname,
                playertwolevel:req.body.playertwolevel,
                playertwomobile:req.body.playertwomobile,
                playerthreeid:req.body.playerthreeid,// player 3
                playerthreename:req.body.playerthreename,
                playerthreerealname:req.body.playerthreerealname,
                playerthreelevel:req.body.playerthreelevel,
                playerthreemobile:req.body.playerthreemobile,
                playerfourid:req.body.playerfourid,//player 4
                playerfourname:req.body.playerfourname,
                playerfourrealname:req.body.playerfourrealname,
                playerfourlevel:req.body.playerfourlevel,
                playerfourmobile:req.body.playerfourmobile,
            }});

        res.json(updateGuild);


    }catch(err){
        res.json({message:err});
    }
})

//delete details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteGuild =await GuildDetails.remove({_id: req.params.id});
        res.json(deleteGuild);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;