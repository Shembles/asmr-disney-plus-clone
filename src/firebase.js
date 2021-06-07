import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBgZxe_qO-z-Zo0DG-bw2akzEy3dNa-fwo",
    authDomain: "disney-plus-clone-8da26.firebaseapp.com",
    projectId: "disney-plus-clone-8da26",
    storageBucket: "disney-plus-clone-8da26.appspot.com",
    messagingSenderId: "435517053643",
    appId: "1:435517053643:web:b145337fef19a3317ad94e",
    measurementId: "G-Q5RQNK7TMS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

 export { auth, provider, storage };
 export default db;