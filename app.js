const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//import routes
const guildRoute = require('./Routes/guilddetails');
const memberRoute = require('./Routes/memberdetails');

//port
var PORT = process.env.PORT || 4000;

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/guild', guildRoute);
app.use('/member', memberRoute);

//get
app.get('/',(req,res)=>{
    res.send('Server Is Running..!');
})

//db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,useUnifiedTopology: true},
    ()=>console.log('Database connected!')
)

app.listen(PORT);
