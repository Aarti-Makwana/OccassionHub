// import express from 'express';
// import cors from 'cors';
// import userRouter from './Router/userRouter.js';
// var app = express();

// app.use(cors());

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use('/user',userRouter);

// app.listen("4000",()=>{
//     console.log("Server connection successful");
// });














// server-app.js
import express from 'express';
import cors from 'cors';
import userRouter from './Router/userRouter.js';
import djRouter from './Router/djRouter.js'; // Import the new DJ router
import mongoose from './connection/dbConfig.js';

var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter);
app.use('/Dj', djRouter); // Use the DJ router for DJ-related routes

app.listen("4001", () => {
  console.log("Server connection successful");
});
