function getRandomColorValue() {
  const arr = [5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  return arr[Math.floor(Math.random() * arr.length)];
}

function getColor() {
  return (
    '#' +
    Array(6)
      .fill(null)
      .map((_) => getRandomColorValue())
      .join('')
  );
}

// console.log(getColor());
const tag = document.querySelector('#tt');
const text = tag.innerHTML;
tag.innerHTML = '';

console.log(text);

text.split('').forEach((str, idx) => {
  console.log(str);
  if (str === ' ') {
    tag.innerHTML += `<div>&nbsp;</div>`;
  } else {
    tag.innerHTML += `<div style="color:${getColor()}; animation-delay:${idx * 0.1}s">${str}</div>`;
  }
});
