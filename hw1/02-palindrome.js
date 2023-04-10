/**
 * Checks if a string is a positive number or not.
 *
 * Examples:
 *
 * '0'    : false \
 * 'abc'  : false \
 * '-1'   : false \
 * '001'  : true \
 * '1.23' : true \
 * 'Infinity' : true
 */
const isPos = function isPositiveNumber(str) {
  if (!Number.isNaN(str) && Number(str) > 0) {
    return true;
  }
  return false;
};

/**
 * Checks if a string is a palindrome or not.
 */
const isPal = function isPalindrome(str) {
  const len = str.length;
  const halfway = Math.floor(len / 2);
  for (let i = 0; i < halfway; i += 1) {
    if (!(str[i] === str[len - i - 1])) {
      return false;
    }
  }
  return true;
};

const inputBox = document.querySelector('input');
const result = document.getElementById('result');

/**
 * Display correct message in response to any user input into `inputBox`.
 */
const handleEvent = function handleEvent() {
  if (!isPos(inputBox.value)) {
    result.style.setProperty('color', 'darkred');
    result.innerHTML = '<b>Input must be a positive number.</b>';
  } else if (!isPal(inputBox.value)) {
    result.style.setProperty('color', 'darkred');
    result.innerHTML = '<b>No. Try again</b>';
  } else {
    result.style.setProperty('color', 'darkgreen');
    result.innerHTML = '<b>Yes. This is a palindrome!</b>';
  }
};

inputBox.addEventListener('input', handleEvent);
