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
  FormHelperText,
  FormErrorMessage,
} from "@/app/common/chakraui/ChakraUI";
// import ColorRadioButton from "./ColorRadioButton";

import { useState, useMemo } from "react";
import useWordsDB from "@/app/hooks/useWordsDB";

export default function AddCollectionModal({
  isOpen,
  onOpen,
  onClose,
  initialRef,
  finalRef,
}) {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => setValue(e.target.value);
  const { setWord } = useWordsDB();

  const isError =
    value.length == 0
      ? { result: true, message: "単語を入力してください。" }
      : RegExp("[!-/:-@[-`{-~｟-､ ]+", "g").test(value)
      ? {
          result: true,
          message: "半角記号および空白文字は含むことができません。",
        }
      : { result: false, message: "ok" };

  // ここにPost処理をかく。
  const handleSave = () => {
    if (!isError?.result) {
      setWord(value);
      setValue("");
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
          <ModalHeader>新規単語の追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={isError}>
              <FormLabel>単語</FormLabel>
              <Input
                ref={initialRef}
                placeholder="単語"
                value={value}
                onChange={handleInputChange}
              />
              {!isError?.result ? (
                <FormHelperText>
                  単語を追加して、学習を記録しましょう。
                </FormHelperText>
              ) : (
                <FormErrorMessage>{isError.message}</FormErrorMessage>
              )}
            </FormControl>
            {/* <FormControl mt={4}>
              <FormLabel>コレクションカラー</FormLabel>
              <ColorRadioButton  />
            </FormControl> */}
          </ModalBody>
          <ModalFooter
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSave}
              isDisabled={isError?.result}>
              作成
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
