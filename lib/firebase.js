import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAQrqh6Lbdxmts0RFi276PtUAFqu1GbgRc',
  authDomain: 'whatsapp-v2-35d76.firebaseapp.com',
  projectId: 'whatsapp-v2-35d76',
  storageBucket: 'whatsapp-v2-35d76.appspot.com',
  messagingSenderId: '885592175063',
  appId: '1:885592175063:web:39f0e3c70cb561e367db92',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
