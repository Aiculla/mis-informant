// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration (replace with your actual Firebase config)
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBCgMau9kWlExr4wyuLSlQjBmJwAmfQoo",
  authDomain: "misinformant-contact-form.firebaseapp.com",
  projectId: "misinformant-contact-form",
  storageBucket: "misinformant-contact-form.firebasestorage.app",
  messagingSenderId: "528502106201",
  appId: "1:528502106201:web:f1cc2a1f3a7e1890cfa948",
  measurementId: "G-YKBL3SLVYE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the function to use it in other parts of the app
export const saveToFirestore = async (name, email, companyName, message) => {
  try {
    const docRef = await addDoc(collection(db, "contactForms"), {
      name,
      email,
      companyName,
      message,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
