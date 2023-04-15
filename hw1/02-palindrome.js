const input = document.querySelector('input');
const isPalindrome = document.getElementById('isPalindrome');
const notPalindrome = document.getElementById('notPalindrome');

const handleInput = function handleUserInput() {
  if (input.value >= 0 && input.value.length > 0) {
    const str = input.value.toString();
    const reversedString = str.split('').reverse().join('');
    if (str === reversedString) {
      isPalindrome.style.display = 'block';
      notPalindrome.style.display = 'none';
    } else {
      isPalindrome.style.display = 'none';
      notPalindrome.style.display = 'block';
    }
  } else {
    isPalindrome.style.display = 'none';
    notPalindrome.style.display = 'block';
  }
};

input.addEventListener('input', handleInput);
