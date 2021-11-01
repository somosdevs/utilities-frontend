import { firestore } from 'firebase/admin'
import withValidation from 'middlewares/withValidation'
import { createProductSchema } from 'schemas/projects.schema'

const Projects = (req, res) => {
  if (req.method === 'POST') {
    const { securityKey, ...data } = req.body

    firestore
      .collection('projects')
      .add(data)

    return res.status(201).json({ message: 'Created successfully', data })
  }

  return firestore
    .collection('projects')
    .get()
    .then(doc => {
      const items = (doc.docs.map(item => {
        return {
          id: item.id,
          ...item.data()
        }
      }))

      res.status(200).json(items)
    })
}

export default withValidation(Projects, createProductSchema)
