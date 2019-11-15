import { createStore, combineReducers,  } from 'redux'
import { firebaseReducer,  } from 'react-redux-firebase'
import firebase from 'firebase'
import 'firebase/firestore' // <- needed if using firestore
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

//reducer
import notifyReducer from './reducers/notifyReducer'

const firebaseConfig = {
    apiKey: "AIzaSyAYJBKN90hcXppAUJvxiHk_d2j88qmUUCE",
    authDomain: "buyprime-d335b.firebaseapp.com",
    databaseURL: "https://buyprime-d335b.firebaseio.com",
    projectId: "buyprime-d335b",
    storageBucket: "buyprime-d335b.appspot.com",
    messagingSenderId: "261568650389",
    appId: "1:261568650389:web:3f463689445225b5a7cf9c",
    measurementId: "G-FTSSTEEC1Z"
}
// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
    notify: notifyReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

export default store