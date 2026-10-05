"use strict";

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', () => {
  console.log(body);
  body.setAttribute('style', `background-color:${getRandomHexColor()};`);
  span.innerHTML = getRandomHexColor();
})