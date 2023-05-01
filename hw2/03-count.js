// Add your code here
const input = document.querySelector('input');
const text = document.getElementById('textArea');
const textHTML = text.innerHTML;

input.addEventListener('input', handleInput);

function handleInput(event) {
  const userInput = event.target.value;
  if (userInput !== '') {
    const newTextHTML = textHTML.replaceAll(
      userInput,
      `<span class="bg-warning m-0 p-0"> ${userInput} </span>`
    );
    text.innerHTML = newTextHTML;
  } else {
    text.innerHTML = textHTML;
  }
}
