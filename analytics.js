let clicks = 0;

document.addEventListener('click', () => {
  clicks++
});

const getClicks = () => { document.write(clicks) };
