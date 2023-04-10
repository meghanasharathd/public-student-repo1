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
    result.style.setProperty('color', 'darkred');
    result.innerHTML = '<b>Input must be a positive number.</b>';
  } else if (!isPalindrome(inputBox.value)) {
    result.style.setProperty('color', 'darkred');
    result.innerHTML = '<b>No. Try again</b>';
  } else {
    result.style.setProperty('color', 'darkgreen');
    result.innerHTML = '<b>Yes. This is a palindrome!</b>';
  }
}

inputBox.addEventListener('input', handleEvent);
