
const admin = require('firebase-admin')

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

!admin.apps.length && admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export const firestore = admin.firestore()
