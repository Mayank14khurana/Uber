const express=require('express');
const cors=require('cors');
require('dotenv').config();
const app=express();
const connectToDb=require('./db/db')
const userRoutes=require('./routes/user.route');
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hyy guys');
})
app.use('/user',userRoutes);
module.exports=app;



