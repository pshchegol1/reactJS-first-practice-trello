import firebase from 'firebase/app'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDXKEA63Oo5jRQ3CvRDj-qWZhBg6I3i95I",
    authDomain: "react-trello-app-e6b6a.firebaseapp.com",
    projectId: "react-trello-app-e6b6a",
    storageBucket: "react-trello-app-e6b6a.appspot.com",
    messagingSenderId: "636630859600",
    appId: "1:636630859600:web:18a0d3ff640e7e2d287655",
    measurementId: "G-32S2VCTJCS"
}

firebase.initializeApp(config)

 const db = firebase.firestore()

 const boardsRef = db.collection('boards')
 const listsdRef = db.collection('lists')
 const cardsRef = db.collection('cards')

 export {boardsRef,listsdRef,cardsRef}