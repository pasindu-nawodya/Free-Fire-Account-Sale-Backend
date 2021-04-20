const mongoose = require('mongoose');

const TeamMebersSchema = mongoose.Schema({
    playerid:{type:String,required:true},
    gamingalies:{type:String,required:true},
    realname:{type:String,required:true},
    image:{type:String},
    contactdetails:{type:String},
    position:{type:String},
});

module.exports=mongoose.model('teammembers',TeamMebersSchema);