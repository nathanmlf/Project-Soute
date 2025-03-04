// import Image from "next/image";
// import styles from "./page.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="header">
      <Link className="header_link" href="/" target="_blank">
        <Image
          className="header_logo"
          src="/logo.svg"
          alt="logo"
          width={80}
          height={80}
        />
      </Link>
      <nav className="nav">
        <ul className="nav_items">
          <li>
            <Link className="nav_link" href="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav_link" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="nav_link" href="/">
              Recipes
            </Link>
          </li>
        </ul>
      </nav>
      <div className="github">
        <Link href="https://github.com/nathanmlf">
          <Image
            className="github_image"
            src="/github.svg"
            alt="Github logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
    </header>
  );
}
