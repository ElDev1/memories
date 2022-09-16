// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const {DATABASE_API_KEY} = process.env 

const firebaseConfig = {
  apiKey: {DATABASE_API_KEY},
  authDomain: "memories-944af.firebaseapp.com",
  projectId: "memories-944af",
  storageBucket: "memories-944af.appspot.com",
  messagingSenderId: "807187385306",
  appId: "1:807187385306:web:e98ec1169c405e4ee1cee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore()

export const createMemorie = (title, text, tags, image) => {
  addDoc(collection(db, 'memoriesList'), {title, text, tags, image})
}

export const getMemories = () => {
  return getDocs(collection(db, 'memoriesList'))
    .then(res => res.docs)
    .then(res => {
      const data = []
      res.forEach(doc => {
        data.push(doc.data())
      })
      return data
    })
}


export const deleteMemorie = (id) => deleteDoc(doc(db, 'memoriesList', id))
 

