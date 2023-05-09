import firebase  from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8LmaiHF1wujCtEdSxpNQTIws1CAMXIXU",
  authDomain: "movies-project-2-34593.firebaseapp.com",
  projectId: "movies-project-2-34593",
  storageBucket: "movies-project-2-34593.appspot.com",
  messagingSenderId: "246434998337",
  appId: "1:246434998337:web:fa82af7158e5d1945c7ec0",
};

// počáteční inicializace

firebase.initializeApp(firebaseConfig);

// služby

const projectFirestore = firebase.firestore();

export { projectFirestore };
