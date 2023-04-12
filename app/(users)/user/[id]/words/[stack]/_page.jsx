"use client";
import PageWrapper from "../components/template/PageWrapper";

import { css } from "@emotion/react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
} from "@/app/common/chakraui/ChakraUI";

import { useState, useEffect } from "react";

import { db } from "@/app/auth/firebase";
import {
  QuerySnapshot,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { auth } from "@/app/auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const cls1 = css({
  display: "grid",
  placeContent: "center",
});

export default function page() {
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const userCollectionRef = collection(db, "users");
    const unsub = onSnapshot(userCollectionRef, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = e.target.elements;
    console.log(name.value, email.value);
    const collectionRef = collection(db, "users");
    const documentRef = addDoc(collectionRef, {
      name: name.value,
      email: email.value,
      timestamp: serverTimestamp(),
    });
    name.value = "";
    email.value = "";
  };

  return (
    <PageWrapper>
      <Container h="90vh" css={cls1} bg="brand.100">
        <ul>
          {users.reverse().map((user) => (
            <li key={user.id}>
              {user.name}:{user.email}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input name="name" type="text" placeholder="名前" />
            <FormLabel>メールアドレス</FormLabel>
            <Input name="email" type="email" placeholder="メールアドレス" />
            <Input type="submit" value="Submit" />
          </FormControl>
        </form>
      </Container>
    </PageWrapper>
  );
}
