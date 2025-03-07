// import styles from "./page.module.css";
"use client";

import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

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
            priority={true}
            loading="eager"
          />

          <Link className="header-link" href="/" target="_blank">
            <h1>
              <span>Sau</span>té
            </h1>
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
              <Link className="nav-link" href="/">
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
              priority={true}
              loading="eager"
            />
          </Link>
        </div>
      </header>

      <main className="main-container">
        {/*  */}
        <div className="container-ingredients">
          <article className="ingredients-body">
            <section className="ingredients">
              <h1>Ingredients</h1>
              <Form action="/search">
                <input
                  className="ingredients-form"
                  name="ingredient"
                  id="ingredient"
                  type="text"
                  placeholder="Onion, Garlic, Pepper, etc."
                />
                <button>Button to create a new line</button>
              </Form>
            </section>

            <section className="quantities">
              <h1>Quantity</h1>
              <Form action="/search">
                <input
                  className="quantities-form"
                  name="ingredient"
                  id="ingredient"
                  type="text"
                  placeholder="1kg, 1oz, 500g, etc. "
                />
              </Form>
            </section>
          </article>
        </div>

        <article className="container-recipe">
          <section className="recipe-body">
            <h1>Recipe</h1>
            <input type="text" name="cooking-time" id="cooking-time" />
            <select name="cooking-timers" id="cooking-timers">
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
            </select>
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
            <button>Button to submit the recipe</button>
          </section>

          <div className="recipe-img">
            <div className="food-img-container">
              <Image
                className="food-img"
                src="/imgTeste.jpg"
                alt="Example image"
                width={400}
                height={400}
              />
            </div>
            <div className="like-img-container">
              <button>
                <Image
                  className="like-img"
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
