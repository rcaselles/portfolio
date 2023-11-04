import Link from "next/link";
import "./header.css";

export default function HeaderItem({ children, location }) {
  return (
    <li className="nav-item">
      <Link href={location}>{children}</Link>
    </li>
  );
}
