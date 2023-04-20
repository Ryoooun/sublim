import { IconButton, useDisclosure } from "@/app/common/chakraui/ChakraUI";
import { IoIosAdd } from "@react-icons/all-files/io/IoIosAdd";
import { useRef } from "react";

import AddCollectionModal from "../organisms/AddCollectionModal";

export default function AddNewCollectionButton({ setSelectId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <IconButton
        aria-label="Add new stack"
        onClick={onOpen}
        colorScheme="whatsapp"
        icon={<IoIosAdd size="40" ref={finalRef} />}
      />
      <AddCollectionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
        setSelectId={setSelectId}
      />
    </>
  );
}
