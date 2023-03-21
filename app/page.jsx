import Link from "next/link"
import { Heading } from './common/chakraui/ChakraUI'

export const metadata = {
  title: 'Home',
  description: 'Welcome to my APP'
}


export default function Home() {
  return (
    <>
      <Heading color='red'>Home</Heading>
    </>

  )
};
