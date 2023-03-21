'use client'
import { CacheProvider } from "@chakra-ui/next-js"
import Provider from './common/chakraui/Provider'
import Header from "./HeaderMenu"

export default function RootLayout({children}){
  return (
    <html lang="ja">
      <head />
      <body>
        <CacheProvider>
          <Provider>
            <Header />
            {children}</Provider>
        </CacheProvider>
      </body>
    </html>
  )
}
