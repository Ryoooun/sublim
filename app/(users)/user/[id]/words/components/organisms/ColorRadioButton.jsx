import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Input,
} from "@/app/common/chakraui/ChakraUI";

function ColorRadioBox(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        bg={props.children}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="full"
        _checked={{
          borderColor: "white",
          borderWidth: "3px",
          padding: "5",
        }}
        _focus={{}}
        px={3}
        py={3}
        color="transparent"></Box>
    </Box>
  );
}

export default function ColorRadioButton({ setCollectionColor }) {
  const options = ["#ffa37c", "#f17f67", "#6ac8d2", "#5b5956"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    defaultValue: "#ffa37c",
    onChange: setCollectionColor,
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <ColorRadioBox key={value} {...radio}>
            {value}
          </ColorRadioBox>
        );
      })}
      <Input type="color" borderRadius="full" w="0.75rem" h="0.75rem" px="3" />
    </HStack>
  );
}
