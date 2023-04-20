import { useCallback } from "react";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore/lite";
import { useAuthState } from "react-firebase-hooks/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

import { auth, db } from "../auth/firebase";

import { useWordsStore } from "../store/words";

const selector = (state) => state.words;

export default function useWordsDB() {
  const words = useWordsStore(selector);

  const [user] = useAuthState(auth);

  // コレクション読み込みを行うハンドラ
  const getWords = useCallback(() => {
    if (user) {
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
    }
  }, []);

  const setWord = useCallback(async (word) => {
    const WordsRef = collection(db, "posts", user.uid, "Words");
    try {
      if (words.filter((w) => w.title.includes(word)).length > 0) {
        throw new Error("already registered.");
      }
      const docRef = await addDoc(WordsRef, {
        title: word,
        contents: "",
        timestamp: serverTimestamp(),
      });
      if (docRef) {
        getWords();
        return { code: 1, id: docRef.id, message: "単語を新規登録しました。" };
      }
    } catch (e) {
      if (e.message === "already registered.") {
        return {
          code: 0,
          message: "追加しようとした単語は既に登録されています。",
        };
      }
      console.log(e.message);
      getWords();
      return { code: -1, message: "単語の登録に失敗しました。" };
    }
  }, []);

  const updateWord = useCallback(async (key, data) => {
    const collRef = collection(db, "posts", user.uid, "Words");
    const q = query(collRef, where("title", "==", key));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      const wordDocumentRef = doc(db, "posts", user.uid, "Words", document.id);
      await updateDoc(wordDocumentRef, { [data.field]: data.content });
    });
    getWords();
  }, []);

  const checkIsRegistered = useCallback(
    (word) => {
      const result = words.filter(
        (w) => w.title.toLowerCase() === word.toLowerCase()
      );
      return result;
    },
    [words]
  );

  return { getWords, setWord, updateWord, checkIsRegistered, words };
}
