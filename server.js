require('dotenv').config()
const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const dataRouter = require('./routes/data');
const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL);
const app = express();
db.on('error', (e)=>{
    console.log(e);
})
db.once('open', ()=>{
    console.log('database is connected');
})
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', dataRouter);
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server is running... http://localhost:${process.env.PORT}`);
})