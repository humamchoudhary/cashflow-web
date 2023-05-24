import SideNav from "./SideNav";
// import ProgressBar from "nextjs-progressbar";

export default function Layout({ children, activePage }) {
  return (
    <>
      {/* <ProgressBar /> */}
      <SideNav activePage={activePage} />
      {children}
    </>
  );
}
