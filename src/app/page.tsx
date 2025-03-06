// import Image from "next/image";
// import styles from "./page.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Image
            className="header_logo"
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />

          <Link className="header-link" href="/" target="_blank">
            <p>
              <span>Sau</span>té
            </p>
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav-items">
            <li>
              <Link className="nav-link" href="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/">
                About
              </Link>
            </li>
            <li>
              <Link className="navlink" href="/">
                Recipes
              </Link>
            </li>
          </ul>
        </nav>

        <div className="github">
          <Link
            className="github-link"
            rel="noopener noreferrer"
            href="https://github.com/nathanmlf"
          >
            <Image
              className="github-image"
              src="/github.svg"
              alt="Github logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
      </header>
      {/*  */}

      <main className="main-container">
        <div className="container-ingredients">
          <article className="ingredients-body">
            <section className="ingredients">
              <h2>Ingredients</h2>
            </section>

            <section className="quantities">
              <h2>Quantity</h2>
            </section>
          </article>
        </div>

        <article className="container-recipe">
          <section className="recipe-body">
            <h2>Recipe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at purus consequat, venenatis purus dictum, sollicitudin nunc. Nam
              lectus lectus, sodales vel ullamcorper id, interdum et nunc. Nulla
              facilisi. Fusce ullamcorper commodo suscipit. Sed ante nulla,
              condimentum id libero vel, vulputate condimentum arcu. Vestibulum
              porttitor, diam vitae placerat aliquet, nisl neque pretium dolor,
              sed facilisis tellus tellus sed turpis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed auctor suscipit libero in
              iaculis. Aenean ligula magna, tempor lobortis hendrerit dictum,
              convallis ut sapien. Quisque id neque id erat tempor dapibus non
              vel lectus.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur at purus consequat, venenatis purus dictum,
              sollicitudin nunc. Nam lectus lectus, sodales vel ullamcorper id,
              interdum et nunc. Nulla facilisi. Fusce ullamcorper commodo
              suscipit. Sed ante nulla, condimentum id libero vel, vulputate
              condimentum arcu. Vestibulum porttitor, diam vitae placerat
              aliquet, nisl neque pretium dolor, sed facilisis tellus tellus sed
              turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed auctor suscipit libero in iaculis. Aenean ligula magna, tempor
              lobortis hendrerit dictum, convallis ut sapien. Quisque id neque
              id erat tempor dapibus non vel lectus.
            </p>
          </section>

          <div className="recipe-img">
            <Image
              className="food-img"
              src="/imgTeste.jpg"
              alt="Teste"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        </article>
      </main>

      <footer className="footer">
        <p>&#xA9; Copyright 2025 Nathan Lourenço. All rights reserved.</p>
      </footer>
    </>
  );
}
