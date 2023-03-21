import CProvider from './common/cache/CProvider'
import Provider from './common/chakraui/Provider'
import Menu from './components/Menu'
import HomeMenu from './components/HomeMenu';

export default function RootLayout({children}){
  const isAuth = false; // auth で物理的にページを切り替える。
  return (
    <html lang="ja">
      <head />
      <body>
        <CProvider>
          <Provider>
            {isAuth ? <Menu /> : <HomeMenu />}
            {children}
          </Provider>
        </CProvider>
      </body>
    </html>
  )
}
