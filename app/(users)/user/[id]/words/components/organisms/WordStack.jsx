import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  Text,
} from "@/app/common/chakraui/ChakraUI";

export default function WordStack({ data }) {
  return (
    <>
      {Array(20)
        .fill(1)
        .map((_, i) => {
          return (
            <Card maxW="sm" key={i} borderRadius="xl">
              <CardBody
                bg={["#3771FB", "#FF693A", "#58BD7D", "#353945"][i % 4]}
                borderTopRadius="xl">
                <Stack>
                  <Heading
                    size="md"
                    color="white"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden">
                    Front End
                  </Heading>
                </Stack>
              </CardBody>
              <Divider color="gray.100" />
              <CardFooter p="2">
                <Stack>
                  <Text>単語数: 100</Text>
                  <Text>{new Date().toLocaleDateString()}</Text>
                </Stack>
              </CardFooter>
            </Card>
          );
        })}
    </>
  );
}
