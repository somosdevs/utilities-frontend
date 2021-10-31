import { firestore } from 'firebase/admin'

export default (req, res) => {
  if (req.method === 'POST') {
    try {
      firestore
        .collection('projects')
        .add(req.body)

      return res.status(200).json({ message: 'OK', data: req.body })
    } catch (err) {
      res.status(400).json({ message: 'ERROR', data: err })
    }
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
