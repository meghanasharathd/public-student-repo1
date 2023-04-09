function isPositiveNumber(str) {
  if ((!Number.isNaN(str) && Number(str) > 0)) {
    return true;
  }
  return false;
}

function isPalindrome(str) {
  const len = str.length;
  const halfway = Math.floor(len / 2);
  for (let i = 0; i < halfway; i += 1) {
    if (!(str[i] === str[len - i - 1])) {
      return false;
    }
  }
  return true;
}

const inputBox = document.querySelector('input');
const result = document.getElementById('result');

function handleEvent() {
  if (isPositiveNumber(inputBox.value) && isPalindrome(inputBox.value)) {
    result.innerHTML = 'Yes. This is a palindrome!';
  } else {
    result.innerHTML = 'No. Try again';
  }
}

inputBox.addEventListener(
  'input',
  handleEvent,
);
