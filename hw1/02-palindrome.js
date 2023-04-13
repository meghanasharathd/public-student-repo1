const input = document.querySelector('input');
const isPalindromeTag = document.querySelector('#IsPalindrome');
// regular expression: passes neg/pos integers and decimals.
const isOnlyNumbersExp = new RegExp(/^(-*([0-9]+.?)[0-9]*)$/);

//  Method: OnUserInput
// Purpose: This method uses a regular expression to confirm the user has entered correct input
//          and if so will determine if the input is a Palindrome while also handling
//          various edge cases.
// Remarks:
//      - I've allowed decimal values since 12.21 is a Palindrome.
//      - Text color for error messages were changed to "darkred" because "red" triggerd a WAVE accessibility error.
//      - Negative values will pass the regular expression but will be handled within the methods logic.
const OnUserInput = () => {
  // Test if input is correct format
  if (isOnlyNumbersExp.test(input.value.toString())) {
    if (input.value >= 0) {
      // store original string for comparison
      let ogString = input.value.toString();
      // Citation: Used following link to learn string.Reverse() use.
      // URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
      let revString = input.value.toString().split('').reverse().join('');

      if (ogString === revString) {
        isPalindromeTag.textContent = 'Yes, This is a Palindrome.';
        isPalindromeTag.style.color = 'green';
      } else {
        isPalindromeTag.textContent = 'Not a Palindrome. Try Again.';
        isPalindromeTag.style.color = 'darkred';
      }
      // handle negative values
    } else if (input.value < 0) {
      isPalindromeTag.textContent = 'Number must be greater than 0. Try Again.';
      isPalindromeTag.style.color = 'darkred';
      // handle unforseen errors
    } else {
      isPalindromeTag.textContent = 'Error Processing Input';
      isPalindromeTag.style.color = 'darkred';
    }
    // handle non numerics,
  } else {
    isPalindromeTag.textContent = 'Input Must Be Numbers. Try Again';
    isPalindromeTag.style.color = 'darkred';
  }
};

input.addEventListener('input', OnUserInput);
