import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
} from "@/app/common/chakraui/ChakraUI";
import { useRef } from "react";

export default function BookmarkAlert({
  text,
  isOpen,
  onClose,
  handleCancel,
  setSelectId,
  updateWord,
}) {
  const cancelRef = useRef();

  const handleSubmit = (e) => {
    handleCancel(e);
    updateWord(text, "isBookmark", false);
    onClose();
    setTimeout(() => setSelectId(text), 1000);
  };

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        isCentered
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay bg="blackAlpha.100">
          <AlertDialogContent width="90vw" boxShadow="none">
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
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
