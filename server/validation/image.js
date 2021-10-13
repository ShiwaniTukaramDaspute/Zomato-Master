import joi from "joi";

export const ValidateUploadImgFile = (uploadImg) => {

const Schema = joi.object({
  file: joi.string().required()
});
return Schema.validateAsync(uploadImg);
};
