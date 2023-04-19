import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
  Flex,
} from "@/app/common/chakraui/ChakraUI";
import { useRef } from "react";

export default function BookmarkAlert({ text, isOpen, onClose, handleCancel }) {
  const cancelRef = useRef();

  const handleSubmit = (e) => {
    handleCancel(e);
    onClose();
  };

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        isCentered
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        {/* <AlertDialogOverlay> */}
        <AlertDialogContent width="90vw">
          <AlertDialogHeader>この単語の学習を始めますか？</AlertDialogHeader>
          <AlertDialogBody>
            <Text
              fontSize="xl"
              color="blue.400"
              textAlign="center"
              fontWeight="bold">
              {text}
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap="4">
            <Button colorScheme="whatsapp" onClick={(e) => handleSubmit(e)}>
              学習する
            </Button>
            <Button onClick={onClose} ref={cancelRef}>
              キャンセル
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
        {/* </AlertDialogOverlay> */}
      </AlertDialog>
    </>
  );
}
