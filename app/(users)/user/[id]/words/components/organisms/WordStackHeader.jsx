import {
  Box,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from "@/app/common/chakraui/ChakraUI";
import { motion } from "framer-motion";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import AddNewCollectionButton from "../atoms/AddNewStackButton";

export default function WordStackHeader({ isLargerThen50em }) {
  return (
    <Box mb="4" w="100%" backdropFilter="auto" backdropBlur="3px">
      <Heading ml="2" mb="4">
        Words
      </Heading>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<RiSearchLine style={{ color: "#888" }} />}
        />
        <Input
          as={motion.input}
          type="text"
          placeholder="コレクションを検索"
          variant="outline"
          color="#888"
          whileFocus={{ backgroundColor: "#fff" }}
        />
        <AddNewCollectionButton />
      </InputGroup>
    </Box>
  );
}
