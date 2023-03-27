import Menu from "./user/components/template/Menu";

export default function UserLayout({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
