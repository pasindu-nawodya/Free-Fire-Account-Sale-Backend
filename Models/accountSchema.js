const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    accountid:{type:String,required:true},
    gamingalies:{type:String,required:true},
    realname:{type:String,required:true},
    gamename:{type:String,required:true},
    price_t:{type:String,required:true},
    level:{type:String},
    image:{type:String},
    desc:{type:String},
    whatsapp:{type:String},
    email:{type:String},
    mobile:{type:String},
});

module.exports=mongoose.model('account',AccountSchema);