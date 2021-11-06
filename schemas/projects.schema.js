const Joi = require('joi')

const securityKey = Joi.string().min(3).max(16)
const name = Joi.string().min(3).max(30)
const preview = Joi.string().uri()
const languages = Joi.array().items(Joi.string()) // .valid() para validar los valores entrantes
const link = Joi.string().uri()
const repoUrl = Joi.string().uri()

export const createProductSchema = Joi.object({
  securityKey: securityKey.required(),
  name: name.required(),
  preview: preview.optional(),
  languages: languages.required(),
  link: link.optional(),
  repoUrl: repoUrl.optional()
})
