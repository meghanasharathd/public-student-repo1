const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput(event) {
  let input = event.target.value;
  if (isPalindrome(input)) {
    console.log(input + ' is a palindrome.');
  }
}

function isPalindrome(input) {
  let inputCheck = parseInt(input);
  if (isNaN(inputCheck)) {
    console.log('Not a number.');
    return false;
  } else if (inputCheck < 0) {
    console.log('Not a positive number.');
    return false;
  }
  let reversedInput = '';
  for (i = input.length - 1; i >= 0; i--) {
    reversedInput += input[i];
  }
  if (input.toString() === reversedInput) {
    return true;
  }
  console.log('Not a palindrome.');
  return false;
}
