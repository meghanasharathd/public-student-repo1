const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

let output = document.getElementById("output");
const newP = document.createElement("p");
output.appendChild(newP);

function handleInput(event) {
  newP.textContent = " ";
  let inputNumber = parseInt(event.target.value);
  if (!isNaN(inputNumber)) {
    console.log(inputNumber);
    if (inputNumber >= 0) {
      const temp = inputNumber;
      let reversed = 0;

      while (inputNumber > 0) {
        reversed = reversed * 10 + (inputNumber % 10);
        inputNumber = parseInt(inputNumber / 10);
      }

      if (reversed == temp) {
        newP.style.color = "green";
        newP.textContent = "It is a palindrome";
      } else {
        newP.style.color = "red";
        newP.textContent = "It is not a palindrome";
      }
    } else {
        newP.style.color = "red";
        newP.textContent = "It is a not a positive number";
    }
  }else{
    newP.textContent = " ";
  }
}
