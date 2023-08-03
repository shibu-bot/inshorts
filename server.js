import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connect from "./database/db.js";  //agr file extension ni denge to run ni krega
import defaultData from "./default.js";
import route from "./routes/route.js";


const app = express();

dotenv.config();   //to start configuring

app.use(cors());   //cors is a middleware use to share resources across different platform/ports/origin inshort cors 2 different port k bich connection establish kr rha idhr 

app.use('/', route);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}


const PORT = process.env.PORT || 8000;

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URL || `mongodb+srv://${userName}:${password}@cluster0.brtkpy6.mongodb.net/?retryWrites=true&w=majority`;


connect(URL);   //step1- Connecting to the database

defaultData();  //step2- THEN Inserting the data into the database

app.listen(PORT,()=>{console.log(`Server is running on port number ${PORT}`)});
