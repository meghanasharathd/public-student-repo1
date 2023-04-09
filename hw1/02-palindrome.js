const input = document.querySelector('input');
const isPalendromeTag = document.querySelector('#IsPalendrome');
// regular expression: passes neg/pos integers and decimals.
const isOnlyNumbersExp = new RegExp(/^(-*([0-9]+.?)[0-9]*)$/);

//  Method: OnUserInput
// Purpose: This method uses a regular expression to confirm the user has entered correct input
//          and if so will determine if the input is a Palendrome while also handling
//          various edge cases.
// Remarks:
//      - I've allowed decimal values since 12.21 is a palendrome.
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
        isPalendromeTag.textContent = 'Yes, This is a Palendrome.';
        isPalendromeTag.style.color = 'green';
      } else {
        isPalendromeTag.textContent = 'Not a Palendrome. Try Again.';
        isPalendromeTag.style.color = 'darkred';
      }
      // handle negative values
    } else if (input.value < 0) {
      isPalendromeTag.textContent = 'Number must be greater than 0. Try Again.';
      isPalendromeTag.style.color = 'darkred';
      // handle unforseen errors
    } else {
      isPalendromeTag.textContent = 'Error Processing Input';
      isPalendromeTag.style.color = 'darkred';
    }
    // handle non numerics,
  } else {
    isPalendromeTag.textContent = 'Input Must Be Numbers. Try Again';
    isPalendromeTag.style.color = 'darkred';
  }
};

input.addEventListener('input', OnUserInput);
