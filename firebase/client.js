import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBSeedrLFibQo2dGVWrrqzs1DLjPnp_Rks',
  authDomain: 'utilities-2b3bc.firebaseapp.com',
  projectId: 'utilities-2b3bc',
  storageBucket: 'utilities-2b3bc.appspot.com',
  messagingSenderId: '146162529404',
  appId: '1:146162529404:web:e2f6ade01cbcc85002c5f9',
  measurementId: 'G-FRKMQSC37P'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromAuth = (user) => {
  const { email, photoURL, displayName, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromAuth(user) : null
    onChange(normalizedUser)
  })
}

export const logInGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
