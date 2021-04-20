const mongoose = require('mongoose');

const guildDetailsSchema = mongoose.Schema({
    guildid:{type:String,required:true},//guildinfo
    guildname:{type:String,required:true},

    leaderid:{type:String,required:true},//player 1
    leadergamingname:{type:String,required:true},
    leaderrealname:{type:String,required:true},
    leaderlevel:{type:String,required:true},
    leadermobile:{type:String,required:true},
    leaderemail:{type:String,required:true},

    playertwoid:{type:String,required:true},//player 2
    playertwoname:{type:String,required:true},
    playertworealname:{type:String,required:true},
    playertwolevel:{type:String,required:true},
    playertwomobile:{type:String,required:true},

    playerthreeid:{type:String,required:true},//player 3
    playerthreename:{type:String,required:true},
    playerthreerealname:{type:String,required:true},
    playerthreelevel:{type:String,required:true},
    playerthreemobile:{type:String,required:true},

    playerfourid:{type:String,required:true},//player 4
    playerfourname:{type:String,required:true},
    playerfourrealname:{type:String,required:true},
    playerfourlevel:{type:String,required:true},
    playerfourmobile:{type:String,required:true},

});

module.exports=mongoose.model('guilddetails',guildDetailsSchema);