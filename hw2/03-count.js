// Add your code here

const text = document.querySelector('#TextContent').innerText;
let keys = '';

function handleKeyDown(event) {
  if (event.key === 'Shift') return;

  let keyWord = document.querySelector('input').value;

  if (keyWord === '') {
    keyWord = event.key;
  }
  let textCopy = text;
  textCopy = textCopy.replaceAll(
    keyWord,
    `<span class="highlight">${keyWord}</span>`
  );

  document.querySelector('#TextContent').innerHTML = textCopy;
}

document.getElementById('UserInput').addEventListener('keydown', handleKeyDown);
