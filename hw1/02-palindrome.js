const input = document.querySelector('input');
const isPalendromeTag = document.querySelector('#IsPalendrome');
const isOnlyNumbersExp = new RegExp(/^(-*([0-9]+.?)[0-9]*)$/);

const handleInput = () => {
  if (isOnlyNumbersExp.test(input.value.toString())) {
    if (input.value >= 0) {
      let ogString = input.value.toString();
      let revString = input.value.toString().split('').reverse().join('');

      if (ogString === revString) {
        isPalendromeTag.textContent = 'Yes, This is a Palendrome.';
        isPalendromeTag.style.color = 'darkgreen';
      } else {
        isPalendromeTag.textContent = 'Not a Palendrome. Try Again.';
        isPalendromeTag.style.color = 'darkred';
      }
    } else if (input.value < 0) {
      isPalendromeTag.textContent = 'Number must be greater than 0. Try Again.';
      isPalendromeTag.style.color = 'darkred';
    } else {
      isPalendromeTag.textContent = 'Error Processing Input';
      isPalendromeTag.style.color = 'darkred';
    }
  } else {
    isPalendromeTag.textContent = 'Input Must Be Numbers. Try Again';
    isPalendromeTag.style.color = 'darkred';
  }
};

input.addEventListener('input', handleInput);
