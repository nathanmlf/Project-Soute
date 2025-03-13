// import styles from "./page.module.css";
"use client";

import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Image
            className="header__logo--image"
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            priority={true}
            loading="eager"
          />

          <Link className="header__link" href="/" target="_blank">
            <h1 className="header__link--title">
              <span className="detail">Sau</span>té
            </h1>
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav__items">
            <li>
              <Link className="nav__items--links" href="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav__items--links" href="/">
                About
              </Link>
            </li>
            <li>
              <Link className="nav__items--links" href="/">
                Recipes
              </Link>
            </li>
          </ul>
        </nav>

        <div className="github">
          <Link
            className="github__link"
            rel="noopener noreferrer"
            href="https://github.com/nathanmlf"
          >
            <Image
              className="github__link--image"
              src="/github.svg"
              alt="Github logo"
              width={60}
              height={60}
              priority={true}
              loading="eager"
            />
          </Link>
        </div>
      </header>

      <main className="main">
        <article className="main__constituents">
          <Form className="main__constituents--form" action="/search">
            <section className="ingredients">
              <h1 className="main__titles">Ingredients</h1>
              <input
                className="ingredients__input"
                name="ingredient"
                id="ingredient"
                type="text"
                placeholder="Onion, Garlic, Pepper, etc."
              />
            </section>

            <section className="quantities">
              <h1 className="main__titles">Quantity</h1>
              <input
                className="quantities__input"
                name="ingredient"
                id="ingredient"
                type="text"
                placeholder="1kg, 1oz, 500g, etc. "
              />
            </section>

            <button className="constituents__button">
              Button to create a new line
            </button>
          </Form>
        </article>

        <article className="recipe">
          <section className="recipe__body">
            <Form action="/search">
              <input
                type="text"
                className="recipe__body--name"
                placeholder="Recipe name"
              />

              <select className="time">
                <option className="time__minutes" value="minutes">
                  mins
                </option>
                <option className="time__hours" value="hours">
                  hr
                </option>
              </select>

              <div className="like">
                <button className="like__button">
                  <Image
                    className="like__button--image"
                    src="/like.svg"
                    alt="Like image"
                    width={100}
                    height={100}
                    priority={true}
                    loading="eager"
                  />
                </button>
              </div>

              <div className="steps">
                <button className="steps__button">Add Topic</button>
              </div>

              <button>Button to submit the recipe</button>
            </Form>
          </section>

          <div className="food__container">
            <Image
              className="food__container--image"
              src="/imgTeste.jpg"
              alt="Example image"
              width={400}
              height={400}
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
