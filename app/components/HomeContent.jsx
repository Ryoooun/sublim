'use client'
import {useDisclosure, useMediaQuery, useBoolean, useBreakpointValue, useClipboard, useDimensions, useOutsideClick } from "@chakra-ui/react"
import { useRef, useState } from "react"
import {DrawerOverlay,DrawerFooter,DrawerHeader,DrawerContent,DrawerBody,Drawer, List, ListItem, Input, Heading, Flex, Box, Text, VStack, Button, Editable, EditableInput, EditablePreview} from '../common/chakraui/ChakraUI'

export default function HomeContent() {

  return (
    <>
      <Box
        height={{
          base: '100%',
          md: '50%',
          xl: '25%',
        }}
        bg='teal.400'
        width={[
          '100%',
          '50%',
          '25%',
          '15%'
        ]}
      />

      <Box fontSize={['sm', 'md', 'lg', 'xl']}>Font size</Box>
      <Box mt={[2, 4, 6, 8]} width='full' height='24px' bg='tomato' />
      <Box bg='papayawhip' p={[2, 4, 6, 8]} color={['red', 'blue', 'yellow', 'green']}>Padding</Box>
    </>
  )



};
