import express from "express";

import {UserModel} from "../../database/allModels";

//Validation
import {ValidateUserDataId, ValidateUpdateUserData, ValidateUpdateAnUserDataId} from "../../validation/user";

const Router = express.Router();

/*
Route            /
Des              Get an user data
Params           _id
BODY             none
Access           Public
Method           GET
*/

Router.get("/:_id", async(req,res)=> {
  try {
    await ValidateUserDataId(req.params);
    const {_id} = req.params;
    const getUser = await UserModel.findById(_id);
    return res.json({user: getUser});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route            /update
Des              Update an user data
Params           _userId
BODY             user data
Access           Public
Method           PUT
*/

Router.put("/update/:_userId", async(req,res)=> {
  try {
    await ValidateUpdateUserData(req.params);
    await ValidateUpdateAnUserDataId(req.body);
    const {userId} = req.params;
    const {userData} = req.body;
    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: userData
      },
      {new: true}
    );
    return res.json({user: updateUserData});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});



export default Router;
