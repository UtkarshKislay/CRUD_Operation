import express from 'express';
// import ConnectDB from './db/connectDb.js';
const app=express();
// ConnectDB();



app.listen(3000,()=>{
    console.log('app is listening');
});
