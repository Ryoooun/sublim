import CProvider from "./common/cache/CProvider";
import Provider from "./common/chakraui/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head />
      <body>
        <CProvider>
          <Provider>{children}</Provider>
        </CProvider>
      </body>
    </html>
  );
}
