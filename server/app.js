import express from 'express';
import cors from 'cors';
import userRouter from './Router/userRouter.js';
import catrererRouter from './Router/catererRouter.js';
import VenueRouter from './Router/VenueRouter.js';
import methodOverride from 'method-override';
import expressFileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
var app = express();

app.use(cors());
app.use(methodOverride("_method"));
app.use(expressFileUpload());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRouter);
app.use("/caterer",catrererRouter);
app.use("/venue",VenueRouter);
app.listen("4001",()=>{
    console.log("Server connection successful");
});

