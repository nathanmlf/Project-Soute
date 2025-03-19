// import styles from "./page.module.css";
"use client";

import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
import { useState } from "react";

export default function Home() {
  const [saveButton, setSaveButton] = useState("Save recipe");
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Image
            className="header__logo--image"
            src="/logo.svg"
            alt="logo"
            width={80}
            height={80}
            priority={true}
            loading="eager"
          />

          <Link className="header__link" href="/" target="_blank">
            <h1 className="header__link--title">
              Sau<span className="detail">té</span>
            </h1>
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav__items">
            <li>
              <Link className="nav__items--links" href="/">
                Recipes
              </Link>
            </li>
            <li>
              <Link className="nav__items--links" href="/">
                About
              </Link>
            </li>
            <li>
              <Link className="nav__items--links" href="/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <article className="recipe">
          <Form className="recipe__form" action="/search">
            <div className="recipe__container">
              <input
                type="text"
                className="recipe__container--name"
                placeholder="Recipe name"
              />
            </div>

            <div className="time__container">
              <label htmlFor="time">
                <Image
                  className="clock-img"
                  src="clock.svg"
                  width={40}
                  height={40}
                  alt="Clock Picture"
                />
              </label>
              <input
                className="time__container--input"
                type="text"
                placeholder="1hr, 20min, etc."
                name="time"
              />
            </div>

            <div className="addLine__container">
              <button className="addLine__container--button">
                Add cooking step
              </button>
            </div>
          </Form>
        </article>

        <article className="constituents">
          <Form className="constituents__form" action="/search">
            <section className="ingredients">
              <h1 className="constituents__form--title">Ingredients</h1>
              <input
                className="ingredients__input"
                name="ingredient"
                id="ingredient"
                type="text"
                placeholder="Onion, Garlic, Pepper, etc."
                required
              />
            </section>

            <section className="quantities">
              <h1 className="constituents__form--title">Quantity</h1>
              <input
                className="quantities__input"
                name="ingredient"
                id="ingredient"
                type="text"
                placeholder="1kg, 1oz, 500g, etc. "
                required
              />
            </section>

            <button className="add-ingredient-button">+</button>

            <button
              className="save-button"
              type="submit"
              onClick={() => {
                setSaveButton("Saved!");
                setTimeout(() => {
                  setSaveButton("Already saved.");
                }, 2000);
              }}
            >
              {saveButton}
            </button>
          </Form>
        </article>
      </main>

      <footer className="footer">
        <p>&#xA9; Copyright 2025 Nathan Lourenço. All rights reserved.</p>
      </footer>
    </>
  );
}
