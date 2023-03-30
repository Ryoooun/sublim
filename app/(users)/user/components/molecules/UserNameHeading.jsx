import { Heading } from "@/app/common/chakraui/ChakraUI";

export default function UserNameHeading({ isLargerThen50em, user }) {
  return (
    <>
      {isLargerThen50em && (
        <Heading color="blackAlpha.700" fontSize="2xl" p="2">
          {user?.userName !== undefined
            ? `${user?.userName.slice(0, 17)}`
            : "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Martyr Patricio Clito Ruíz y Picasso".slice(
                0,
                17
              )}
        </Heading>
      )}
    </>
  );
}
