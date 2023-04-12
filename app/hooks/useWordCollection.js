import { useEffect, useRef, useState, useCallback, useMemo } from "react";

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

import { useWordCollectionStore } from "@/app/store/wordCollection";

const selector = (state) => state.wordCollections;

export default function useWordCollection() {
  const wordCollections = useWordCollectionStore(selector);

  // const [collections, setCollections] = useState({});

  const [user] = useAuthState(auth);

  // 初回時のコレクション読み込み
  const getCollections = useCallback(() => {
    const postsRef = collection(db, "posts", user.uid, "WordCollections");
    console.log("get collection");
    getDocs(postsRef).then((querySnapshot) => {
      useWordCollectionStore.setState(
        {
          wordCollections: querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        },
        true
      );
    });
  }, []);

  // useEffect(async () => {
  //   const ref = collection(db, "posts");
  //   const q = query(
  //     ref,
  //     where(firebase.firestore.FieldPath.documentId(), "==", user.uid)
  //   );
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.docs.forEach((docP) => {
  //     const ref = collection(db, "posts", docP.id, "WordCollections");
  //     getDocs(ref).then((querySnapshot) => {
  //       querySnapshot.docs.forEach((doc) => {
  //         const reff = collection(
  //           db,
  //           "posts",
  //           docP.id,
  //           "WordCollections",
  //           doc.id,
  //           "Words"
  //         );
  //         getDocs(reff).then((ss) => {
  //           console.log(ss.docs.length);
  //           ss.docs.forEach((d) => console.log(d.data()));
  //         });
  //       });
  //     });
  //   });
  // const querySnapshont = await getDocs();
  // querySnapshont.forEach((doc) => {
  //   console.log(doc.id, "=>", doc.data());
  // });
  // }, []);

  return [getCollections, wordCollections];
}
