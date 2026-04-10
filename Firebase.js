// ── CONFIGURACIÓN FIREBASE ───────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, orderBy, query, where, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcf0MTynJlmAw-Ul_FlePm_oLyN1hC2ko",
  authDomain: "delvalletours-1f937.firebaseapp.com",
  projectId: "delvalletours-1f937",
  storageBucket: "delvalletours-1f937.firebasestorage.app",
  messagingSenderId: "869724285650",
  appId: "1:869724285650:web:160935f52f2d41c6ae9b0b",
  measurementId: "G-85F95MV480"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, orderBy, query, where, updateDoc };