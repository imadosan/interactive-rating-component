'use strict';

const submit = document.querySelector('.submit');
const cardBefore = document.querySelector('.card-before');
const cardAfter = document.querySelector('.card-after');
const btns = document.querySelectorAll('.btn');
const rating = document.querySelector('#rating');

cardAfter.style.display = 'none';

submit.addEventListener('click', () => {
  cardBefore.style.display = 'none';
  cardAfter.style.display = 'flex';
});

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    rating.innerHTML = btn.innerHTML;
  });
});
