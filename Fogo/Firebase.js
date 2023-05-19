import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCj596O5Xx202dtlp8II7CCXKwqP3iuVY0",
  authDomain: "projetofogo-ff6a3.firebaseapp.com",
  projectId: "projetofogo-ff6a3",
  storageBucket: "projetofogo-ff6a3.appspot.com",
  messagingSenderId: "627774437865",
  appId: "1:627774437865:web:5635db18f78f621c00f378"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;