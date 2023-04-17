"use client";

import {
  Text,
  Flex,
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
  useToast,
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
  setSelectId,
}) {
  const [value, setValue] = useState("");
  const toast = useToast();
  const { setWord, checkIsRegistered } = useWordsDB();
  const [focusFlag, setFocusFlag] = useState();
  const [registered, setRegistered] = useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    const result = checkIsRegistered(e.target.value);
    if (result.length > 0) {
      setRegistered(result);
    } else {
      setRegistered([]);
    }
  };

  // const handleBlur = (e) => {
  //   setFocusFlag(false);
  // };

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
  const handleSave = async () => {
    if (!isError?.result) {
      const res = await setWord(value);
      console.log(res);
      if (res.code === 1) {
        setSelectId(res.id);
        console.log("finish:", res.message);
        toast({
          title: `${value}を登録`,
          status: "success",
          isClosable: true,
        });
      } else if (res.code === -1) {
        console.log("error", "=>", res.message);
        toast({
          title: `${value}登録エラー`,
          status: "error",
          isClosable: false,
        });
      } else if (res.code === 0) {
        toast({
          title: `${value}は既に登録されています。`,
          status: "info",
          isClosable: true,
        });
      }

      setValue("");
      onClose();
    }
  };
  const beforeClose = () => {
    setValue("");
    setRegistered([]);
    onClose();
  };

  const handleLinkRegistered = (id) => {
    onClose();
    setValue("");
    setRegistered([]);
    setSelectId(id);
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={beforeClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新規単語の追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={isError.result}>
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
            mt="-8"
            gap="4"
            flexDirection="column"
            justifyContent="center">
            {registered.length > 0
              ? registered.map((r) => {
                  return (
                    <Text as="p" fontSize="xs">
                      <Text
                        as="span"
                        color="blue.400"
                        fontSize="lg"
                        mr="2"
                        onClick={() => handleLinkRegistered(r.id)}>
                        {r.title}
                      </Text>
                      が既に登録されています。
                    </Text>
                  );
                })
              : null}
            <Flex direction="row">
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleSave}
                isLoading={isError?.result}
                loadingText="Checking"
                isDisabled={isError?.result || registered.length > 0}>
                作成
              </Button>
              <Button onClick={beforeClose}>キャンセル</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
