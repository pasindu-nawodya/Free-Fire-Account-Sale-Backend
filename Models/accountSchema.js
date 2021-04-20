const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    accountid:{type:String,required:true},
    gamingalies:{type:String,required:true},
    realname:{type:String,required:true},
    image:{type:Array},
    desc:{type:String},
    whatsapp:{type:String},
    email:{type:String},
    mobile:{type:String},
});

module.exports=mongoose.model('account',AccountSchema);