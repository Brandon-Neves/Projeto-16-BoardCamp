import joi from 'joi'

export const createRentsSchema = joi.object({
  customerId: joi.number().integer().required(),
  gameId: joi.number().integer().min(1).required(),
  daysRented: joi.number().greater(0).required()
})
