const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//import routes
const accountRoute = require('./Routes/accountdetails');

//port
var PORT = process.env.PORT || 4000;

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/account', accountRoute);

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
