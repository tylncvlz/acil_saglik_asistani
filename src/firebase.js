import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBGE7FwtcidnSFUPv0yeQa9d7DG_1uQeys",
    authDomain: "acil-saglik-asistani-66abe.firebaseapp.com",
    databaseURL: "https://acil-saglik-asistani-66abe-default-rtdb.firebaseio.com",
    projectId: "acil-saglik-asistani-66abe",
    storageBucket: "acil-saglik-asistani-66abe.firebasestorage.app",
    messagingSenderId: "255696486041",
    appId: "1:255696486041:web:536dde48ba0bb1c24f4208",
    measurementId: "G-J2HE2MZVGM"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
