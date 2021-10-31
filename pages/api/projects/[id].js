import { firestore } from 'firebase/admin'

export default (req, res) => {
  const { id } = req.query

  firestore
    .collection('projects')
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(404).end()
    })
}
