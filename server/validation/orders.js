import joi from "joi";

export const ValidateOrderId = (orderId) => {

const Schema = joi.object({
  _id: joi.string().required()
});
return Schema.validateAsync(orderId);
};

export const ValidateNewOrderDetails = (neworderdetailsId) => {

const Schema = joi.object({
 orderDetails: joi.string().required()
});
return Schema.validateAsync(neworderdetailsId);
};