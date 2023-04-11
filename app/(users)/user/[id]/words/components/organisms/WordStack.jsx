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
            <Card key={i} borderRadius="xl">
              <CardBody
                bg={["#ffa37c", "#f17f67", "#6ac8d2", "#5b5956"][i % 4]}
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
              <CardFooter py="2">
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
