import { useCallback } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  get,
  updateDoc,
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
import { getAuth } from "firebase/auth";
import { useBookmarksStore } from "../store/bookmarks";
import useWordsDB from "./useWordsDB";

const selector = (state) => state.bookmarks;

export default function useBookmarkDB() {
  const bookmarks = useBookmarksStore(selector);

  const [user] = useAuthState(auth);
  const { getWords, words } = useWordsDB();
  // コレクション読み込みを行うハンドラ
  const getBookmark = useCallback(() => {
    if (user) {
      const bookmarkRef = collection(db, "posts", user.uid, "Bookmark");
      getDocs(bookmarkRef).then((querySnapshot) => {
        useBookmarksStore.setState(
          {
            bookmarks: querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          },
          true
        );
      });
    }
  }, []);

  const setBookmark = useCallback(async (bookmark) => {
    const bookmarkRef = collection(db, "posts", user.uid, "Bookmark");
    try {
      if (bookmarks.filter((b) => b.title.includes(bookmark)).length > 0) {
        throw new Error("already registered.");
      }
      const docRef = await addDoc(bookmarkRef, {
        title: bookmark,
        content: "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      if (docRef) {
        getWords();
        return {
          code: 1,
          id: docRef.id,
          message: "ブックマークに追加しました。",
        };
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

  const checkIsRegistered = useCallback(
    (bookmark) => {
      if (bookmarks.length === 0) {
        getBookmark();
      }
      if (words.length === 0) {
        getWords();
      }
      const currentBookmarks = bookmarks.map((obj) => obj.title);
      const currentWords = words.map((obj) => obj.title);
      const result = [
        ...new Set([...currentBookmarks, ...currentWords]),
      ].filter((b) => b.toLowerCase() === bookmark.toLowerCase());

      return result;
    },
    [bookmarks]
  );

  return { bookmarks, getBookmark, setBookmark, checkIsRegistered };
}
