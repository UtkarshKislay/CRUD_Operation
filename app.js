import express from 'express';
import ConnectDB from './db/connectDb.js';
import {join} from 'path';
import web from './routes/web.js';
const app=express();
ConnectDB();

// app.use(express.static("public"));
app.use('/student',express.static(join(process.cwd(),"public")));
app.set("view engine","ejs");
app.use('/student',web);

app.listen(3000,()=>{
    console.log('app is listening');
});
