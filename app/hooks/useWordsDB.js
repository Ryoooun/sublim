import { useCallback } from "react";

import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
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
  const getWords = useCallback(async () => {
    if (user) {
      const refRef = doc(db, "posts", user.uid, "References", "WordReferences");
      const docSnap = await getDoc(refRef);
      if (docSnap.exists()) {
        useWordsStore.setState(
          {
            words: docSnap.get("references"),
          },
          true
        );
      }
    } else {
      console.log("no user info. can not get words");
    }
  }, []);

  const getContents = async (title) => {
    const ref = await words.find((obj) => obj.title == title).ref;
    if (user && ref != undefined) {
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        // let oldContents = docSnap.get("contents");
        return docSnap.get("contents");
        // return oldContents;
      }
    } else {
      console.log("no user info. can not get words");
    }
  };

  const setWord = useCallback(async (word, isBookmark) => {
    const WordsRef = collection(db, "posts", user.uid, "Words");
    const now = new Date();
    try {
      if (words.length !== 0) {
        if (words.filter((w) => w.title.includes(word)).length > 0) {
          throw new Error("already registered.");
        }
      }
      const docRef = await addDoc(WordsRef, {
        title: word,
        contents: "",
        timestamp: now,
        isBookmark,
      });

      const referenceRef = doc(
        db,
        "posts",
        user.uid,
        "References",
        "WordReferences"
      );

      const docSnap = await getDoc(referenceRef);
      if (docSnap.exists()) {
        await updateDoc(referenceRef, {
          references: arrayUnion({
            title: word,
            ref: docRef,
            isBookmark: isBookmark,
            timestamp: now,
          }),
        });
      } else {
        await setDoc(
          doc(db, "posts", user.uid, "References", "WordReferences"),
          { references: [] }
        );
        await updateDoc(referenceRef, {
          references: arrayUnion({
            title: word,
            ref: docRef,
            isBookmark: isBookmark,
            timestamp: now,
          }),
        });
      }

      if (docRef) {
        await getWords();
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

      return { code: -1, message: "単語の登録に失敗しました。" };
    }
  }, []);

  // const updateWord = useCallback(async (key, data) => {
  //   const collRef = collection(db, "posts", user.uid, "Words");
  //   const q = query(collRef, where("title", "==", key));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach(async (document) => {
  //     const wordDocumentRef = doc(db, "posts", user.uid, "Words", document.id);
  //     await updateDoc(wordDocumentRef, { [data.field]: data.content });
  //   });
  //   getWords();
  // }, []);

  const checkIsRegistered = useCallback((word) => {
    const result = words.filter(
      (w) => w.title.toLowerCase() === word.toLowerCase()
    );
    return result;
  }, []);

  const updateWord = useCallback(
    async (word, key, value) => {
      const ref = await words.find((obj) => obj.title == word).ref;
      if (user && ref != undefined) {
        await updateDoc(ref, {
          [key]: value,
        });
        if (key !== "contents") {
          const docRef = doc(
            db,
            "posts",
            user.uid,
            "References",
            "WordReferences"
          );
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const oldReferences = docSnap.get("references");
            const target = oldReferences.findIndex((obj) => obj.title === word);
            oldReferences[target][key] = value;
            await setDoc(docRef, {
              references: oldReferences,
            });
            await getWords();
          }
        }
      } else {
        console.log("no user info. can not get words");
      }
    },
    [words]
  );

  return {
    getWords,
    setWord,
    getContents,
    updateWord,
    checkIsRegistered,
    words,
  };
}
