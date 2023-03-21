'use client'

import { useEffect, useState } from "react";
import NextLink from "next/link";
import {Link, Flex, Box, Spacer, Button, ButtonGroup, Heading, textDecoration} from './common/chakraui/ChakraUI'

export default function Home() {
  const [isPcType, setIsPcType] = useState(true)
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPod", "iPad", "Android"]
    const machineType = navigator.userAgent
    const mobileTypeCheck = mobileTypeList.filter(item => {
      return machineType.search(item) != -1;
    })

    if(mobileTypeCheck.length > 0){
      setIsPcType(false)
    } else {
      setIsPcType(true)
    }
  })
  return (
    <>
      {isPcType ?
      <Box as="header">
        <Flex as='nav' direction='row' bg='gray.200'>
          <Box p='3'>
            <Link as={NextLink} href='/' _hover={{color:"red"}}>
              <Heading size='lg'>My App</Heading>
            </Link>
          </Box>
          <Box p='2'>
            <Link lineHeight='2' fontSize='2xl' p='3' rounded='2xl'  _hover={{bg:"gray.300"}} as={NextLink} href='/'>Home</Link>
          </Box>
          <Box p='2'>
            <Link lineHeight='2' fontSize='2xl' p='3' rounded='2xl'  _hover={{bg:"gray.300"}} as={NextLink} href='/about'>About</Link>
          </Box>
          <Spacer />
          <ButtonGroup gap='2' m='3'>
            <Button colorScheme='teal'>Sign Up</Button>
            <Button colorScheme='teal'>Log in</Button>
          </ButtonGroup>
      </Flex>
    </Box>
    :
    <Box as="header">
      <Flex as='nav' direction='row' bg='gray.200'>
        <Button>Logo</Button>
        <ButtonGroup gap='2' m='3'>
          <Button colorScheme='teal'>Sign Up</Button>
          <Button colorScheme='teal'>Log in</Button>
        </ButtonGroup>
      </Flex>
    </Box>
    }
    </>
  )
};
