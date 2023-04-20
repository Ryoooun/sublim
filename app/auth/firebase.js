// 初期化に必要となる関数
import { initializeApp } from "firebase/app";
// Authentication JS SDK
// Google認証ポップアップの設定
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Firesoreの初期化
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
// webアプリのFirebase設定
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
// 認証の設定
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
export const GoogleProvider = new GoogleAuthProvider();
