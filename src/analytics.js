let clicks = 0;

document.addEventListener('click', () => {
  clicks++
});

document.querySelector('#btn').addEventListener('click', () => {
  document.write(clicks)
});
