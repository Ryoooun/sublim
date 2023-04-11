import { IconButton } from "@/app/common/chakraui/ChakraUI";
import { AiOutlineFolderAdd } from "@react-icons/all-files/ai/AiOutlineFolderAdd";
import { useDisclosure } from "@/app/common/chakraui/ChakraUI";
import { useRef } from "react";

import AddCollectionModal from "../organisms/AddCollectionModal";

export default function AddNewCollectionButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <IconButton
        aria-label="Add new stack"
        onClick={onOpen}
        colorScheme="whatsapp"
        icon={<AiOutlineFolderAdd size="30" ref={finalRef} />}
      />
      <AddCollectionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
      />
    </>
  );
}
