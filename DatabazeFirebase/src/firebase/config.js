import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBop_JJzKnbH9sEvfacYnpRKWrEHujlPEM",

  authDomain: "movies-project-b53ff.firebaseapp.com",

  projectId: "movies-project-b53ff",

  storageBucket: "movies-project-b53ff.appspot.com",

  messagingSenderId: "623935265824",

  appId: "1:623935265824:web:ce48d80da48fa532dcb045",
};

// počáteční nastavení firebase init

firebase.initializeApp(firebaseConfig);

// počáteční nastavení služeb services

const projectFirestore = firebase.firestore();

export { projectFirestore };
