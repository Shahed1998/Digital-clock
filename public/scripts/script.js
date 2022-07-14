import DateTimeColor from './module.js';

const color = new DateTimeColor();
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

window.onload = () => {
  const dateTime = new DateTimeColor();
  dateTime.getDateTime();
};

setInterval(() => {
  const dateTime = new DateTimeColor();
  dateTime.getDateTime();
}, 1000);

btn1.addEventListener('click', () => {
  color.colorPicker('#eb4747');
});

btn2.addEventListener('click', () => {
  color.colorPicker('#94b49f');
});

btn3.addEventListener('click', () => {
  color.colorPicker('#fad9a1');
});
