import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtDtsoa2jGiu5EOjhqdxP1m2a_5xpdehk",
  authDomain: "proyecto-react-b534d.firebaseapp.com",
  projectId: "proyecto-react-b534d",
  storageBucket: "proyecto-react-b534d.appspot.com",
  messagingSenderId: "265070705958",
  appId: "1:265070705958:web:761f910824e68eda74d5e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
