const captcha = document.querySelector('#captcha');
const handle = document.querySelector('#handle');
const button = document.querySelector('#handle span');
const toLeftBoundary = handle.getBoundingClientRect().left;
const buttonWidth = button.getBoundingClientRect().width;
let dragged = false;

button.addEventListener('mousedown', () => {
  dragged = true;
});

window.addEventListener('mousemove', (event) => {
  if (!dragged) return;
  captcha.style.setProperty('--moved', `${event.clientX - toLeftBoundary - buttonWidth / 2}px`);
});

window.addEventListener('mouseup', (event) => {
  if (!dragged) return;
  dragged = false;
  const dis = event.clientX - toLeftBoundary;
  if (dis >= 430 && dis <= 450) {
    captcha.classList.add('passed');
    alert('Check Passed!');
  } else {
    captcha.style.setProperty('--moved', '0px');
  }
});
