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
  Heading,
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

import useWordCollection from "@/app/hooks/useWordCollection";
import usePrevious from "@/app/hooks/usePrevious";
import useComponentDidMount from "@/app/hooks/useComponentDidMount";

const cls1 = css({
  display: "grid",
  placeContent: "center",
});

export default function page() {
  const [getCollections, wordCollections] = useWordCollection();
  const handleClick = async () => {
    await getCollections();
  };

  return (
    <PageWrapper>
      <Container h="90vh" css={cls1} bg="brand.100">
        <Button bg="red.300" onClick={handleClick}>
          Get Collections
        </Button>
        <Button onClick={() => console.log(wordCollections)}>check</Button>
        {wordCollections.length > 0 ? (
          <ul>
            {wordCollections.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        ) : (
          <Heading>No collections.</Heading>
        )}
      </Container>
    </PageWrapper>
  );
}
