export default class Card {
  constructor() { }
  createCard() {
    document.querySelector('#addDetermine').addEventListener('click', (e) => {
      e.preventDefault();
      const determine = document.querySelector('#inputText').value;
      const description = document.querySelector('#inputDesc').value;

      const block = document.createElement('div')
      block.classList.add('block');

      const det = document.createElement('p');
      det.innerText = determine;
      const desc = document.createElement('p');
      desc.innerText = description;

      block.append(det);
      block.append(desc);

      document.querySelector('#lib').append(block);
    })
  }
}