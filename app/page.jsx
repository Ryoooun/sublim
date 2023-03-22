import HomeContent from "./components/HomeContent";

export const metadata = {
  title: "Home",
  description: "Welcome to my APP",
};

export default async function Home() {
  return (
    <>
      <HomeContent />
    </>
  );
}
