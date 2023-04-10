function isPositiveNumber(str) {
  if (!Number.isNaN(str) && Number(str) > 0) {
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
  if (!isPositiveNumber(inputBox.value)) {
    result.style.setProperty('color', 'red');
    result.innerHTML = 'Input must be a positive number.';
  } else if (!isPalindrome(inputBox.value)) {
    result.style.setProperty('color', 'red');
    result.innerHTML = 'No. Try again';
  } else {
    result.style.setProperty('color', 'green');
    result.innerHTML = 'Yes. This is a palindrome!';
  }
}

inputBox.addEventListener('input', handleEvent);
