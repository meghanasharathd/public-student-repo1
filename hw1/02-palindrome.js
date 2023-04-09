const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput(event) {
  let input = event.target.value;
  let resultDiv = document.getElementById('result');
  let inputCheck = parseInt(input);

  if (input.length === 0) {
    resultDiv.textContent = '';
  } else {
    // todo: fix this check
    // maybe add these messages to text div
    if (isNaN(inputCheck)) {
      console.log('Not a number.');
    } else if (inputCheck < 0) {
      console.log('Not a positive number.');
    }
    console.log(`${input} is a palindrome.`);

    if (isPalindrome(input)) {
      // Used docs to find out how to programatically remove/add bootstrap classes
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      if (resultDiv.classList.contains('text-danger')) {
        resultDiv.classList.remove('text-danger');
      }
      resultDiv.textContent = 'Yes. This is a palindrome!';
      resultDiv.classList.add('text-success');
    } else {
      if (resultDiv.classList.contains('text-success')) {
        resultDiv.classList.remove('text-success');
      }
      resultDiv.textContent = 'No. Try again.';
      resultDiv.classList.add('text-danger');
    }
  }
}

function isPalindrome(input) {
  let reversedInput = '';
  for (i = input.length - 1; i >= 0; i--) {
    reversedInput += input[i];
  }
  if (input === reversedInput) {
    return true;
  }
  return false;
}
