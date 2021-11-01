
export default function withValidation (handler, schema) {
  return async (req, res) => {
    if (req.method !== 'POST') return handler(req, res)

    const data = req.body
    const { error } = schema.validate(data, { abortEarly: false })

    if (error) return res.status(400).json({ message: 'ERROR', error })

    return handler(req, res)
  }
}
