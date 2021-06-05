const icons = document.querySelector('.header__icons')
const nav = document.querySelector('.header__nav')
const menu = document.querySelector('.menu__label')
const buttons = document.querySelector('.header__buttons')

menu.addEventListener( 'click', () => {
  icons.classList.toggle('no__hidden')
  nav.classList.toggle('no__hidden')
  buttons.classList.toggle('no__hidden')
})
