import express from 'express';
import ConnectDB from './db/connectDb.js';
import {join} from 'path';
import web from './routes/web.js';
const app=express();
ConnectDB();


// app.use(express.static("public"));//midleware

app.use('/student',express.static(join(process.cwd(),"public")));

app.set('views','./views');//by default set to views folder

app.set("view engine","ejs");//template engine other as pug, etc

app.use('/student',web);//open the /student route and show the content web file rendering

app.listen(3000,()=>{
    console.log('app is listening');
});
