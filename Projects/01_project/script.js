const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('Click', (event) => {
    body.style.backgroundColor = event.target.id;
  });
});