import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyCyPGxl7DLa4Ninq5-BdHARpWNthn5CwIc",
  authDomain: "unipark-a9b95.firebaseapp.com",
  projectId: "unipark-a9b95",
  storageBucket: "unipark-a9b95.firebasestorage.app",
  messagingSenderId: "909703796453",
  appId: "1:909703796453:web:f3aacc49306418458de60c",
  measurementId: "G-PL9BG657QE",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }; 
