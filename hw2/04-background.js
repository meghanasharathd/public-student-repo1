// Add your code here
const btn = document.getElementById('control');
let intervalTime = document.getElementById('intervalTime');
let nIntervId;
//function from:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function changeColor() {
  const background = document.querySelector('body');
  const red = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  background.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.5)`;
}

function startIntervals(sec) {
  const time = sec * 1000;
  if (!nIntervId) {
    nIntervId = setInterval(changeColor, time);
  }
  btn.textContent = 'Stop';
  btn.style.backgroundColor = 'red';
}

function stopIntervals() {
  clearInterval(nIntervId);
  nIntervId = null;
  btn.textContent = 'Start';
  btn.style.backgroundColor = 'blue';
}

startIntervals(3);

btn.addEventListener('click', () => {
  if (isNaN(parseInt(intervalTime.value))) {
    inputTime = 3;
  } else {
    inputTime = intervalTime.value;
  }
  if (btn.textContent === 'Start') {
    startIntervals(inputTime);
  } else {
    stopIntervals();
  }
});
