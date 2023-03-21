import Link from "next/link"
import { Heading, Center } from './common/chakraui/ChakraUI'
import HomeMenu from "./components/HomeMenu"
import HomeContent from "./components/HomeContent"

export const metadata = {
  title: 'Home',
  description: 'Welcome to my APP'
}


export default function Home() {
  return (
    <>
      <HomeContent />
    </>

  )
};
