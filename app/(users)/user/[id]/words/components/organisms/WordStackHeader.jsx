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
    <Box
      mb="4"
      py="10"
      // w={isLargerThen50em ? "78vw" : "81vw"}
      backdropFilter="auto"
      backdropBlur="2px"
      boxShadow="0px 0px 18px 0px #00000003 inset"
      bg="radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 100%)"
      zIndex="10"
      position="relative">
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
          placeholder="検索"
          variant="outline"
          color="#888"
          whileFocus={{ backgroundColor: "#fff" }}
        />
        <AddNewCollectionButton />
      </InputGroup>
    </Box>
  );
}
