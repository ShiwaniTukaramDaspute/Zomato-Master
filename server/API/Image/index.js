//Libraries
require('dotenv').config();
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//Database model
import {ImageModel} from "../../database/allModels";

//Validation
import {ValidateUploadImgFile} from "../../validation/image";

//Utilities
import {s3Upload} from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

//AWS S3 bucket config


/*
Route            /
Des              Uploading given image to S3 bucket , and then saving the file to mongodb
Params           None
Access           Public
Method           GET
*/

Router.post("/", upload.single("file") ,async(req,res)=> {
  try {
    await ValidateUploadImgFile(req.file);
 const file = req.file;

 //S3 bucket options
 const bucketOptions = {
   Bucket: "shapeaijulybatch",
   Key: file.originalname,
   Body: file.buffer,
   ContentType: file.mimetype,
   ACL: "public-read"
 };

 const uploadImage = await s3Upload(bucketOptions);

  } catch (error) {
return res.status(500).json({error: error.message});
  }
});

export default Router;
