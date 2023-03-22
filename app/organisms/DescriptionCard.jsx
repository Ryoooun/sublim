import {
  Stack,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Icon,
  Text,
} from "../common/chakraui/ChakraUI";

export default function DescriptionCard({ content }) {
  const { icon, header, body } = { ...content };

  return (
    <Card w={{ base: "95%", md: "75%" }}>
      <CardHeader roundedTop="lg">
        <Flex>
          <Icon
            rounded="lg"
            top="-10"
            position="relative"
            as={icon}
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
            {header}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody mt="-5">
        <Stack spacing="5">
          <Box>
            <Text color="gray.600">{body}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
