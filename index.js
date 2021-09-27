//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";


//API
import Auth from "./API/Auth";

//Database connection


const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));

zomato.use(cors());

//For application routes
//localhost:4000/auth/signup


zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));

zomato.listen(4000, ()=>
ConnectDB().then(()=>console.log("Server is up and running"))