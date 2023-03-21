
import {Heading, Box, Flex, Button, Text, Center, VStack, Card, CardBody, CardHeader, CardFooter, Stack, Divider, Icon} from '../common/chakraui/ChakraUI'
import { FiBook, FiSearch } from '../common/icon/homeMenuIcons'
export default function HomeContent() {

  return (
    <>
    <Center boxSizing='border-box'>
      <Heading letterSpacing="0.5rem" fontWeight='thin'>SUBLIM</Heading>
    </Center>
    <VStack gap='5'>
      <Text bg='gray.100' w='full' p='2' textAlign='center'>
        <span >自分が知らないことを、どれほど言葉にできますか？</span><br/>Sublimはあなたの学習や知識吸収をサポートする環境を提供します。
      </Text>
      <Box>
        <Button colorScheme='whatsapp'
                _hover={{opacity: '0.7'}}>
                  学習を始める
        </Button>
      </Box>
      <Card w={{base: '95%', md: '50%'}}>
          <CardHeader bg='green.400' roundedTop='lg'>
            <Flex gap='5'>
              <Icon as={FiBook} boxSize='10' color="white"/>
              <Text lineHeight='10' color='white' fontWeight='bold' fontSize={['xl', '2xl']}>単語駆動学習</Text>
            </Flex>
          </CardHeader>
        <CardBody mt='-5'>
          <Stack spacing='5'>
            <Divider />
            <Box>
              <Text>Sublimは、学習を単語で管理します。学習内容を記録するためのマークダウンエディターを備えた、少しパワフルな単語帳です。</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card w={{base: '95%', md: '50%'}}>
          <CardHeader bg='green.400' roundedTop='lg'>
            <Flex gap='5'>
              <Icon as={FiSearch} boxSize='10' color="white"/>
              <Text lineHeight='10' color='white' fontWeight='bold' fontSize={['xl', '2xl']}>発見・収集</Text>
            </Flex>
          </CardHeader>
        <CardBody mt='-5'>
          <Stack spacing='5'>
            <Divider />
            <Box>
              <Text>Sublimは、学習を単語で管理します。学習内容を記録するためのマークダウンエディターを備えた、少しパワフルな単語帳です。</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
    </>
  )
};
