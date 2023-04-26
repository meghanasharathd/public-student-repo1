// Add your code here
const input = document.querySelector('input');
const text = document.getElementById('textArea');
const textHTML = text.innerHTML;

input.addEventListener('input', handleKeyDown);

function handleKeyDown(event) {
  const value = event.target.value;
  text.innerHTML = textHTML;
  let textArray = textHTML.split(' ');
  for (let count in textArray) {
    if (value === textArray[count] && value !== '') {
      textArray[
        count
      ] = `<span class="bg-warning m-0 p-0"> ${textArray[count]} </span>`;
      console.log(textArray[count]);
    }
  }
  const newTextHTML = textArray.join(' ');
  console.log(newTextHTML);
  text.innerHTML = newTextHTML;
}
