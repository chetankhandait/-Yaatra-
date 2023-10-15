import {initializeApp} from"firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA-lVvH64PE0nJ5EZHXfGjzSoh8KkPDtuA",
    authDomain: "yatra-5feef.firebaseapp.com",
    projectId: "yatra-5feef",
    storageBucket: "yatra-5feef.appspot.com",
    messagingSenderId: "789274747055",
    appId: "1:789274747055:web:89dce8b11c78774a01345a",
    databaseURL:"https://yatra-5feef-default-rtdb.firebaseio.com"
  };
  
  export const  app= initializeApp(firebaseConfig);