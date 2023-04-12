import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  Text,
  Button,
} from "@/app/common/chakraui/ChakraUI";
import { memo } from "react";

import dayjs from "dayjs";

export default memo(function WordStack({ wordCollections, getCollections }) {
  return (
    <>
      {wordCollections.length > 0 ? (
        wordCollections.map((collection, i) => {
          return (
            <Card key={collection.id} borderRadius="xl" maxH="32">
              <CardBody bg={collection.color} borderTopRadius="xl">
                <Stack>
                  <Heading
                    size="md"
                    color="white"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden">
                    {collection.name}
                  </Heading>
                </Stack>
              </CardBody>
              <Divider color="gray.100" />
              <CardFooter py="2">
                <Stack>
                  <Text fontSize="xs" color="gray.500">
                    登録単語: {collection.count}個
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    作成日時:
                    {dayjs(collection.timestamp.toDate()).format(
                      "YYYY年MM月DD日"
                    )}
                  </Text>
                </Stack>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <>
          <Heading>No collections.</Heading>
          <Button onClick={getCollections}>Reload</Button>
        </>
      )}
    </>
  );
});
