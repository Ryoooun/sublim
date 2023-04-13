import { useCallback } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  get,
  snapshotEqual,
  onSnapshot,
  query,
  where,
  DocumentReference,
  addDoc,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { auth, db } from "../auth/firebase";

import { useWordsStore } from "../store/words";

const selector = (state) => state.words;

export default function useWordsDB() {
  const words = useWordsStore(selector);

  const [user] = useAuthState(auth);

  // コレクション読み込みを行うハンドラ
  const getWords = useCallback(() => {
    const WordsRef = collection(db, "posts", user.uid, "Words");
    getDocs(WordsRef).then((querySnapshot) => {
      useWordsStore.setState(
        {
          words: querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        },
        true
      );
    });
  }, []);

  const setWord = useCallback(async (word) => {
    const WordsRef = collection(db, "posts", user.uid, "Words");
    await addDoc(WordsRef, {
      title: word,
      contents: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then((documentRef) => {
        console.log("success");
        getWords();
        return { code: true, message: "成功" };
      })
      .catch((error) => {
        console.log("error");
        return { code: false, message: error };
      });
  }, []);

  return { getWords, setWord, words };
}
