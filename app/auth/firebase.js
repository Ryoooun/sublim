// 初期化に必要となる関数
import { initializeApp } from "firebase/app";
// Authentication JS SDK
// Google認証ポップアップの設定
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// webアプリのFirebase設定
const firebaseConfig = {
  apiKey: "AIzaSyCmcav6JtvJYFLYfbx_Ki4xa9qKiFjvDv4",
  authDomain: "sublim214.firebaseapp.com",
  projectId: "sublim214",
  storageBucket: "sublim214.appspot.com",
  messagingSenderId: "738134900457",
  appId: "1:738134900457:web:c266a91f7e5a6435297a78",
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// 認証の設定
const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

export { auth, GoogleProvider };
