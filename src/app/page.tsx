// import styles from "./page.module.css";
"use client";

import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
import { useState } from "react";


export default function Home() {
  const [saveButton, setSaveButton] = useState("salvar")  
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

    </header>

    <main className="main">
      <article className="recipe">
        <section className="recipe__body">
          <Form action="/search">
            <input
              type="text"
              className="recipe__body--name"
              placeholder="Recipe name"
              required
            />

            <div>
              <input
                type="number"
                placeholder="Cooking time"
                required
              />

              <select>
                <option value="minutes">
                  mins
                </option>
                <option value="hours">
                  hr
                </option>
              </select>
            </div>

            <div>
              <button>Add Topic</button>
            </div>

            <div>
              <button>
                Button to submit the recipe
              </button>
            </div>
          </Form>
        </section>
      </article>

      <article className="constituents">
        <Form className="constituents__form" action="/search">
          
        <section className="ingredients">

        <h1 className="constituents__form--title">Ingredients</h1>
        <input
          className="ingredients__title--input"
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
          className="quantities__title--input"
          name="ingredient"
          id="ingredient"
          type="text"
          placeholder="1kg, 1oz, 500g, etc. "
          required
          />
        
        <select className="inputOptions">
          <option value="teaspoon">Tea Spoon</option>
          <option value="desertSpoon">Desert Spoon</option>
          <option value="tableSpoon">Table Spoon</option>
          <option value="americanCup">American Cup</option>
          <option value="cup">Cup</option>
          <option value="ounce">Ounce (oz)</option>
          <option value="gram">Gram (g)</option>
          <option value="poundLibra">Pound / Libra (lb)</option>
          <option value="kilogram">Kilogram (kg)</option>
        </select>  
        </section>

        <button className="constituents__form--button" type="submit" onClick={() => 
          {
            setSaveButton("Salvo!")
            setTimeout(() => {setSaveButton("Salvar")}, 2000)
          } } >
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
