const Joi = require('joi')

const name = Joi.string().min(3).max(30)
const preview = Joi.string().uri()
const languages = Joi.array().items(Joi.string()) // .valid() para validar los valores entrantes
const link = Joi.string().uri()
const repoUrl = Joi.string().uri()

const createProductSchema = Joi.object({
  name: name.required(),
  preview: preview.optional(),
  languages: languages.required(),
  link: link.required(),
  repoUrl: repoUrl.optional()
})

export {
  createProductSchema
}
