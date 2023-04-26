// Add your code here
function logSubmit(event) {
  console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
  event.preventDefault();
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);