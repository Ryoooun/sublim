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

  return { getWords, words };
}
