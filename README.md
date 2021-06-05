<div align="center">
<img width="120px"  src="https://raw.githubusercontent.com/no-te-rindas/logo/main/Logo/LeonidasEsteban-destello-envolvente-cuadrada.png" />
</div>

# Fivenite

This is a solution to the [Fivenite challenge by Leonidas Esteban](https://leonidasesteban.com).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<details>
  <summary>💻 Desktop</summary>
  <img src="./images/desktop-preview.png">
</details>

<details>
  <summary>📱 Mobile</summary>
  <img src="./images/mobile-preview.png">
</details>

### Links

- Live Site URL: [Fivenite](https://themattfire.github.io/fivenite/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

I put on practice my knowledge on javascript, even thought it's still basic, I am feeling proud about my first dropdown responsive menu.

**HTML**

```html
<div class="header__menu">
  <input class="menu__input" id="btn-menu" type="checkbox" />
  <label class="menu__label" for="btn-menu">
    <span class="label__icon"></span>
  </label>
</div>
```

**CSS**

```css
.header__menu .menu__label {
  cursor: pointer;
  display: block;
  height: 100%;
  user-select: none;
}

.header__menu .menu__label > .label__icon {
  background: var(--white);
  display: block;
  height: 0.2rem;
  position: relative;
  transition: background 0.2s ease-out;
  width: 2.5rem;
  top: 34px;
  margin: 0 auto;
}
```

**JS**

```js
const icons = document.querySelector('.header__icons')
const nav = document.querySelector('.header__nav')
const menu = document.querySelector('.menu__label')
const buttons = document.querySelector('.header__buttons')

menu.addEventListener('click', () => {
  icons.classList.toggle('no__hidden')
  nav.classList.toggle('no__hidden')
  buttons.classList.toggle('no__hidden')
})
```

### Useful resources

- [Responsive menu by alexcamachogz](https://codepen.io/alexcamachogz/pen/jOBaMOO) - Used this code as reference

## Author

- Github - [@themattfire](github.com/themattfire)
- Special thanks to - [@alexcamahcogz](github.com/alexcamachogz)
