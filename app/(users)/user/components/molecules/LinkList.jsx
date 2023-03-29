import { Icon, Link, Heading } from "../../../../common/chakraui/ChakraUI";
import NextLink from "next/link";

export default function LinkList({ lists, fontSize = "2xl" }) {
  console.log(lists);

  return (
    <>
      {lists.map((list) => {
        return (
          <Link
            color="brand.900"
            display="flex"
            alignItems="center"
            key={list.id}
            as={NextLink}
            href={list.path}
            _hover={{ color: "brand.100" }}>
            {list.icon ? <Icon as={list.icon} boxSize="6" /> : null}
            <Heading fontSize={fontSize} p="2">
              {list.title}
            </Heading>
          </Link>
        );
      })}
    </>
  );
}
