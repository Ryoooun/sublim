import {
  Heading,
  Box,
  Flex,
  Button,
  Text,
  Center,
  VStack,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Stack,
  Divider,
  Icon,
  Link,
} from "../common/chakraui/ChakraUI";
import { FiBook, FiSearch, ImLoop2 } from "../common/icon/homeMenuIcons";
import NextLink from "next/link";

export default function HomeContent() {
  return (
    <>
      <Center boxSizing="border-box">
        <Heading letterSpacing="0.5rem" fontWeight="thin" mt="12">
          SUBLIM
        </Heading>
      </Center>
      <VStack gap="10">
        <Text bg="gray.100" w="full" p="2" textAlign="center">
          <span>知っていることを、どれほど言葉にできますか？</span>
          <br />
          Sublimはあなたの学習や知識吸収をサポートする環境を提供します。
        </Text>
        <Box>
          <Button colorScheme="whatsapp">学習を始める</Button>
        </Box>
        <Card w={{ base: "95%", md: "75%" }}>
          <CardHeader roundedTop="lg">
            <Flex>
              <Icon
                rounded="lg"
                top="-10"
                position="relative"
                as={FiBook}
                boxSize="12"
                color="white"
                bg="green.400"
                p="2"
              />
              <Text
                ml="-12"
                mt="4"
                color="gray.600"
                fontWeight="bold"
                fontSize={["xl", "2xl"]}>
                単語駆動学習
              </Text>
            </Flex>
          </CardHeader>
          <CardBody mt="-5">
            <Stack spacing="5">
              <Box>
                <Text color="gray.600">
                  <Text as="span" fontWeight="light">
                    SUBLIM
                  </Text>
                  は、学習を単語で管理します。学習内容を記録するためのテキストエディターを備えた、少しパワフルでクセのある単語帳です。
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card w={{ base: "95%", md: "75%" }}>
          <CardHeader roundedTop="lg">
            <Flex>
              <Icon
                rounded="lg"
                top="-10"
                position="relative"
                as={FiSearch}
                boxSize="12"
                color="white"
                bg="green.400"
                p="2"
              />
              <Text
                ml="-12"
                mt="4"
                color="gray.600"
                fontWeight="bold"
                fontSize={["xl", "2xl"]}>
                発見と収集
              </Text>
            </Flex>
          </CardHeader>
          <CardBody mt="-5">
            <Stack spacing="5">
              <Box>
                <Text color="gray.600">
                  SNSやフィードから常にトレンドをキャッチすることは重要です。SUBLIMは、あなたの興味を惹く単語を提案します。
                  <br />
                  もちろん、普段するように、あなたがSNSやWebサイトを飛び回って収集した情報を管理することもサポートします。
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card w={{ base: "95%", md: "75%" }}>
          <CardHeader roundedTop="lg">
            <Flex>
              <Icon
                rounded="lg"
                top="-10"
                position="relative"
                as={ImLoop2}
                boxSize="12"
                color="white"
                bg="green.400"
                p="2"
              />
              <Text
                ml="-12"
                mt="4"
                color="gray.600"
                fontWeight="bold"
                fontSize={["xl", "2xl"]}>
                共有と循環
              </Text>
            </Flex>
          </CardHeader>
          <CardBody mt="-5">
            <Stack spacing="5">
              <Box>
                <Text color="gray.600">
                  学習内容を他のユーザーに共有することができます。一方で、個人的な学習はプライベートにすることもできます。
                  <br />
                  単語だけでなく、単語帳を元にワードクラウドを生成し、共有することができます。
                  <br />
                  ユーザーそれぞれが学習した内容が結びつく環境で、他者の知見と自己の学習を比較して再評価し、新たな学習の循環へ導きます。
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Box textAlign="center">
          <Heading>「学ぶこと」を学ぶ。</Heading>
          <Heading>「知ること」を知る。</Heading>
          <Button
            as={NextLink}
            href="/about"
            bg="gray.300"
            color="gray.700"
            my="10"
            px="12"
            py="6">
            SUBLIMについて
          </Button>
        </Box>
      </VStack>
    </>
  );
}
