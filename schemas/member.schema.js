const Joi = require('joi')

const securityKey = Joi.string().min(3).max(16)
const name = Joi.string().min(3).max(30)
const discord = Joi.string().min(3).max(30)
const avatar = Joi.string().uri()
const links = Joi
  .array()
  .items(
    Joi
      .object({
        name: Joi.string(),
        url: Joi.string()
      })
  )

export const createProductSchema = Joi.object({
  securityKey: securityKey.required(),
  name: name.required(),
  discord: discord.required(),
  links: links.required(),
  avatar: avatar.required()
})
