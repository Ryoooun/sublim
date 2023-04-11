"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  FormHelperText,
  FormErrorMessage,
} from "@/app/common/chakraui/ChakraUI";
import ColorRadioButton from "./ColorRadioButton";

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/auth/firebase";
import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "@/app/auth/firebase";
const setDocument = async (uid, collectionName, collectionColor) => {
  const docRef = doc(collection(db, "post", `${uid}`, collectionName));
  await setDoc(docRef, {
    collectionName,
    collectionColor,
  });
  console.log(docRef);
};

export default function AddCollectionModal({
  isOpen,
  onOpen,
  onClose,
  initialRef,
  finalRef,
}) {
  const [collectionName, setCollectionName] = useState("");
  const [collectionColor, setCollectionColor] = useState("#f17f67");
  const [user] = useAuthState(auth);
  const handleInputChange = (e) => setCollectionName(e.target.value);
  const isError = collectionName === "";

  // ここにPost処理をかく。
  const handleSave = () => {
    if (!isError) {
      console.log(collectionName);
      console.log(collectionColor);
      setDocument(user.uid, collectionName, collectionColor);
      setCollectionColor("#f17f67");
      setCollectionName("");
      onClose();
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新規コレクションの追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={isError}>
              <FormLabel>コレクション名</FormLabel>
              <Input
                ref={initialRef}
                placeholder="コレクション名"
                value={collectionName}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  コレクションによってあなたの単語を管理します。
                </FormHelperText>
              ) : (
                <FormErrorMessage>コレクション名が必要です。</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>コレクションカラー</FormLabel>
              <ColorRadioButton setCollectionColor={setCollectionColor} />
            </FormControl>
          </ModalBody>
          <ModalFooter
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSave}
              isDisabled={isError}>
              新規作成
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
