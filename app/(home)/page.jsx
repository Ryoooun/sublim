import HomeContent from "./template/HomeContent";

export const metadata = {
  title: "Sublim:学習の循環をサポートするパワフルでお節介な単語帳",
  description:
    "Sublimのトップページです。Sublimはあなたが、学習についてを学習し、知ることを知るための手助けをすることが目的の、パワフルでお節介な単語帳アプリケーションです。",
  viewport: "width=device-width, initial-scale=1.0",
};

export default async function Home() {
  return (
    <>
      <HomeContent />
    </>
  );
}
