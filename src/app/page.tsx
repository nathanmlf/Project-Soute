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
        <div className="main__constituents">
          <article className="main__constituents--body">
            <section className="ingredients">
              <h1 className="main__titles">Ingredients</h1>
              <Form action="/search">
                <input
                  className="ingredients__form"
                  name="ingredient"
                  id="ingredient"
                  type="text"
                  placeholder="Onion, Garlic, Pepper, etc."
                />
              </Form>
            </section>

            <section className="quantities">
              <h1 className="main__titles">Quantity</h1>
              <Form action="/search">
                <input
                  className="quantities__form"
                  name="ingredient"
                  id="ingredient"
                  type="text"
                  placeholder="1kg, 1oz, 500g, etc. "
                />
              </Form>
            </section>

            <button className="constituents__button">
              Button to create a new line
            </button>
          </article>
        </div>

        <article className="recipe">
          <section className="recipe__body">
            <input className="recipe__body--name" placeholder="Recipe name" />
            <input className="recipeInput" type="text" placeholder="Recipe" />

            <select name="recipeInput__name__timers">
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
            </select>

            <p className="recipe__text">
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
            <button>Button to submit the recipe</button>
          </section>

          <div className="food">
            <div className="food__container">
              <Image
                className="food__container--image"
                src="/imgTeste.jpg"
                alt="Example image"
                width={400}
                height={400}
              />
            </div>
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
          </div>
        </article>
      </main>

      <footer className="footer">
        <p>&#xA9; Copyright 2025 Nathan Lourenço. All rights reserved.</p>
      </footer>
    </>
  );
}
