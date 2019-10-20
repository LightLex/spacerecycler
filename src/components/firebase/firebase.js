import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2JAZnFlDjuYY_7hHmI-CILH6yJ4tiUZg",
  authDomain: "orbitalscrapmetal.firebaseapp.com",
  databaseURL: "https://orbitalscrapmetal.firebaseio.com",
  projectId: "orbitalscrapmetal",
  storageBucket: "orbitalscrapmetal.appspot.com",
  messagingSenderId: "370957110990",
  appId: "1:370957110990:web:da5943adeaf8f618480a9f",
  measurementId: "G-HS72HG41EX"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;
