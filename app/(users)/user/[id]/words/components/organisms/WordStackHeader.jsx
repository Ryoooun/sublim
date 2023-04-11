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

export default function WordStackHeader() {
  return (
    <Box
      mb="4"
      pos="fixed"
      top="5"
      zIndex="10"
      w="85vw"
      backdropFilter="auto"
      backdropBlur="3px">
      <Heading ml="2" mb="4">
        Words
      </Heading>
      <InputGroup w="95%">
        <InputLeftElement
          pointerEvents="none"
          children={<RiSearchLine style={{ color: "#888" }} />}
        />
        <Input
          as={motion.input}
          type="text"
          placeholder="単語帳を検索"
          variant="outline"
          color="#888"
          whileFocus={{ backgroundColor: "#fff" }}
        />
        <AddNewCollectionButton />
      </InputGroup>
    </Box>
  );
}
