// Add your code here
const btn = document.getElementById('control');
let intervalTime = document.getElementById('intervalTime');
let nIntervId;

function changeColor() {
  const background = document.querySelector('body');
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  background.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.5)`;
}

function startIntervals(sec) {
  const time = sec * 1000;
  if (!nIntervId) {
    nIntervId = setInterval(changeColor, time);
  }
  btn.textContent = 'Stop';
  btn.classList = 'col-3 btn btn-danger my-3';
}

function stopIntervals() {
  clearInterval(nIntervId);
  nIntervId = null;
  btn.textContent = 'Start';
  btn.classList = 'col-3 btn btn-primary my-3';
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
