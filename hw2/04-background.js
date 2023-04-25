// Add your code here
let intervalInput = document.getElementById('TimerInterval');
let body = document.querySelector('body');
let interval = 3000;
let timerID;

const GetRGBValue = () => { return Math.floor((Math.random() * (255 - 0) + 0));  }

const ChangeBGColor = () => {
    body.style.backgroundColor = `rgba(${GetRGBValue()}, ${GetRGBValue()}, ${GetRGBValue()}, .7)`;
}

const SetInterval = () => 
{ 
    if(intervalInput.value === '') 
    {
        interval = 2000;
    }
    else {
        interval = intervalInput.value * 1000;
    }
}

function StartStopColors() {
    let button = document.querySelector('button');
    button.textContent = button.textContent === 'Stop' ? 'Start' : 'Stop';

    SetInterval();

    if (button.textContent === 'Start') {
        clearInterval(timerID);
    }
    else {
        timerID = setInterval(ChangeBGColor, interval);
    }
}


window.addEventListener('load', () => {
    timerID = setInterval(ChangeBGColor, interval);
    document.querySelector('button').addEventListener('click', StartStopColors);
    console.log('loaded');
});

