import express from 'express';
import cors from 'cors';
import userRouter from './Router/userRouter.js';
var app = express();

app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRouter);

app.listen("4000",()=>{
    console.log("Server connection successful");
});

