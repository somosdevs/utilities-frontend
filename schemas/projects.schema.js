const Joi = require('joi')

const name = Joi.string().min(3).max(30)
const preview = Joi.string().uri()
const languages = Joi.array().items(Joi.string()) // .valid() para validar los valores entrantes

const createProductSchema = Joi.object({
  name: name.required(),
  preview: preview.optional(),
  languages: languages.required()
})

export {
  createProductSchema
}
