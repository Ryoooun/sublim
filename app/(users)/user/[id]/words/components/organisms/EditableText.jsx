import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  Text,
  useEditableControls,
} from "@/app/common/chakraui/ChakraUI";
import useWordsDB from "@/app/hooks/useWordsDB";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export default function EditableText({ title, words }) {
  const [titles, setTitles] = useState([]);
  const [oldTitle, setOldTitle] = useState("");
  const [titleAlert, setTitleAlert] = useState(false);
  const { updateWord } = useWordsDB();

  useEffect(() => {
    setTitles(
      words
        .map((word) => word.title.toLowerCase())
        .filter((v) => {
          return !title.toLowerCase().includes(v);
        })
    );
    setOldTitle(title);
  }, []);

  const handleSubmit = async (word) => {
    console.log(oldTitle, "=>", word);
    try {
      await updateWord(oldTitle, "title", word);
      console.log("updated");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChanged = (word) => {
    if (titles.includes(word.toLowerCase())) {
      setTitleAlert(true);
    } else {
      setTitleAlert(false);
    }
  };

  const handleEnterTitle = (event) => {
    if (event.code === "Enter" && titleAlert) {
      event.preventDefault();
    }
  };

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" alignItems="center">
        <IconButton
          size="xs"
          isDisabled={titleAlert}
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          size="xs"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center" alignItems="center">
        <IconButton size="xs" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  };

  return (
    <>
      <Editable
        w="75%"
        gap="1rem"
        display="flex"
        flexDirection="row"
        alignItems="baseline"
        textAlign="left"
        defaultValue={title}
        fontSize="2xl"
        isPreviewFocusable={true}
        submitOnBlur={false}
        onKeyDown={(e) => handleEnterTitle(e)}
        onChange={(title) => handleChanged(title)}
        onSubmit={(title) => handleSubmit(title)}>
        <EditablePreview />
        <Input as={EditableInput} onKeyDown={(e) => handleEnterTitle(e)} />
        <EditableControls />
      </Editable>
      {titleAlert && (
        <Text as="span" fontSize="xs" color="red.400" pos="absolute">
          この単語は登録されているため設定することができません。
        </Text>
      )}
    </>
  );
}
