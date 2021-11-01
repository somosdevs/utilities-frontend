import { firestore } from 'firebase/admin'

const ProjectId = (req, res) => {
  const { id } = req.query

  return firestore
    .collection('projects')
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      if (!data) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(404).end()
    })
}

export default ProjectId
