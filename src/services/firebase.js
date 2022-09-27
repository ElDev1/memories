import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid';

const { REACT_APP_API_KEY } = process.env;

const firebaseConfig = {
    apiKey: "AIzaSyCw2pdjBN2PxCGA_ZBJgNw3CbpYPU7HUy0",
    authDomain: 'memories-944af.firebaseapp.com',
    projectId: 'memories-944af',
    storageBucket: 'memories-944af.appspot.com',
    messagingSenderId: '807187385306',
    appId: '1:807187385306:web:e98ec1169c405e4ee1cee3'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore()

export const auth = getAuth(app)

export const createMemorie = (title, text, tags, image, createdBy) => {
    addDoc(collection(db, 'memoriesList'), { title, text, tags, image, createdBy, date : new Date(), likes: 0, likedBy: [] })
};

export const createUsers = (username, email) => {
    addDoc(collection(db, 'userlist'), {username, email})
}

export const getUsers = () => {
    return getDocs(collection(db, 'userlist'))
        .then(res => res.docs)
        .then(res => {
            const data = []
            res.forEach(doc => {
                data.push(doc.data())
            })
            return data
        })
}

export const getMemories = () => {
    return getDocs(collection(db, 'memoriesList'))
        .then(res => res.docs)
        .then(res => {
            const data = [];
            res.forEach(doc => {
                data.push(doc.data());
            });
            return data;
        });
};

export const deleteMemorie = id => deleteDoc(doc(db, 'memoriesList', id))

export const storage = getStorage(app)

export const uploadFile =  async (file) => {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}