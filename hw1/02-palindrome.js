const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

let result = document.getElementById("result");
let answer = document.createElement("p");
answer.setAttribute("class", "output");
result.append(answer);

function handleInput(event) {
  var value = event.target.value;
  //hint found from: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
  var valueReversed = value.split("").reverse().join("");

  if (isNaN(value)) {
    answer.textContent = "Enter a number";
    answer.style.color = "red";
  } else if (value < 0) {
    answer.textContent = "Enter a positive number";
    answer.style.color = "red";
  } else if (value === valueReversed) {
    answer.textContent = "Yes. This is a palindrome!";
    answer.style.color = "green";
  } else {
    answer.textContent = "No, Try again";
    answer.style.color = "red";
  }
}
