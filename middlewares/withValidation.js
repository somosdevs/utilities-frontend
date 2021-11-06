
export default function withValidation (handler, schema) {
  return async (req, res) => {
    if (req.method === 'POST') {
      const data = req.body
      const { error } = schema.validate(data, { abortEarly: false })

      if (error) return res.status(400).json({ message: 'ERROR', error })
      if (data.securityKey !== process.env.SECURITY_KEY) return res.status(401).json({ message: 'ERROR', error: 'Unauthorized. Incorrect Security Key' })
    }

    return handler(req, res)
  }
}
