import SideNav from "./SideNav";
export default function Layout({ children, activePage, x }) {
  return (
    <>
      <SideNav activePage={activePage} />
      {children}
    </>
  );
}
