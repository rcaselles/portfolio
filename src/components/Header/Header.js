import HeaderItem from "./HeaderItem";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <code className="header-logo">rcaselles</code>
        <ul className="nav">
          <HeaderItem location={"/"}>Home</HeaderItem>
          <HeaderItem location={"/projects"}>Projects</HeaderItem>
          <HeaderItem location={"/notes"}>Notes</HeaderItem>
          <HeaderItem location={"/blog"}>Blogs</HeaderItem>
          <HeaderItem location={"/about"}>About</HeaderItem>
        </ul>
      </div>
    </>
  );
}
