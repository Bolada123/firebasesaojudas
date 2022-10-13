// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// incluir as configurações obtidas no firebase console 
//
const firebaseConfig = {
    apiKey: "AIzaSyA04E8X3Xo5AgM--gkZY00crPXBCktDQ8w",
    authDomain: "aula13-10.firebaseapp.com",
    databaseURL: "https://aula13-10-default-rtdb.firebaseio.com",
    projectId: "aula13-10",
    storageBucket: "aula13-10.appspot.com",
    messagingSenderId: "109115052020",
    appId: "1:109115052020:web:0b4996654a1de6205bb3a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database
