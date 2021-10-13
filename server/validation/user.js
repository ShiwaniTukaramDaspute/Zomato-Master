import joi from "joi";

export const ValidateUserDataId = (userdataId) => {

const Schema = joi.object({
  _id: joi.string().required()
});
return Schema.validateAsync(userdataId);
};


export const ValidateUpdateAnUserDataId = (updateanuserdataId) => {

const Schema = joi.object({
  _userId: joi.string().required()
});
return Schema.validateAsync(updateanuserdataId);
};


export const ValidateUpdateUserData = (updateuserdataObj) => {

const Schema = joi.object({
  userData: joi.string().required()
});
return Schema.validateAsync(updateuserdataObj);
};
