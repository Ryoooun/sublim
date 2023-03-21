'use client'
import { CacheProvider } from "@chakra-ui/next-js"

export default function CProvider({children}) {
  return <CacheProvider>{children}</CacheProvider>
};
