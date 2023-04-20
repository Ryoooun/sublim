import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@/app/common/chakraui/ChakraUI";
import useWordsDB from "@/app/hooks/useWordsDB";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import { motion } from "framer-motion";
import AddNewCollectionButton from "../atoms/AddNewStackButton";
import BookmarkModal from "../molecules/BookmarkModal";

export default function WordStackHeader({
  isLargerThen50em,
  search,
  setSearch,
  setSelectId,
}) {
  const { words } = useWordsDB();
  console.log(words);
  const handleChange = (e) => {
    if (RegExp("[!-/:-@[-`{-~｟-､ ]+", "g").test(e.target.value[0])) {
    } else {
      setSearch(e.target.value);
    }
  };
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
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        pr={isLargerThen50em ? "10" : ""}>
        <Heading ml="2" mb="4">
          Words
        </Heading>
        <Text fontWeight="thin">{words.length} words</Text>
      </Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<RiSearchLine style={{ color: "#888" }} />}
        />
        <Input
          as={motion.input}
          type="text"
          placeholder="検索"
          bg="#0000001f"
          variant="unstyled"
          color="#aaa"
          fontSize="lg"
          value={search}
          onChange={handleChange}
          whileFocus={{ backgroundColor: "#ffffffff" }}
        />
        <AddNewCollectionButton setSelectId={setSelectId} />
      </InputGroup>
      <Flex justifyContent="flex-end">
        <BookmarkModal text={"学習予定から学習を始める"} />
      </Flex>
    </Box>
  );
}
