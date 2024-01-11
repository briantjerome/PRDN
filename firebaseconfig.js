import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAcdNpbU2modJeImTxSXlgJ8jyVyBf1VxY",
  authDomain: "project-design-374fa.firebaseapp.com",
  databaseURL: "https://project-design-374fa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-design-374fa",
  storageBucket: "project-design-374fa.appspot.com",
  messagingSenderId: "320276067982",
  appId: "1:320276067982:web:d16bd68f2ec7bc766bfbdf",
  measurementId: "G-FN1GP3STB5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
