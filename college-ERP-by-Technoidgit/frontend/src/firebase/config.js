
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBnEP42QGJw58d50_fJtgIxyuzzM1fk02M",
  authDomain: "erp-4272c.firebaseapp.com",
  projectId: "erp-4272c",
  storageBucket: "erp-4272c.appspot.com",
  messagingSenderId: "874640110230",
  appId: "1:874640110230:web:5897f39cf15a73ddd8c8b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);