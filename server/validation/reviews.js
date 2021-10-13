import joi from "joi";

export const ValidateNewReview = (newreviewObj) => {

const Schema = joi.object({
  reviewData: joi.string().required()
});
return Schema.validateAsync(newreviewObj);
};

export const ValidateDeleteReviewId = (deletereviewId) => {

const Schema = joi.object({
  _id: joi.string().required()
});
return Schema.validateAsync(deletereviewId);
};
