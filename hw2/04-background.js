// Add your code here
// Function to generate a random color in rgba format with a dimmed alpha value
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = 0.5; // Dimmed alpha value
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  let intervalId;
  let intervalSeconds = 3; // Default interval is 3 seconds
  let isRunning = true; // Flag to track if color change is running or stopped
  // Function to start changing background color at the specified interval
  function startBackgroundColorChange() {
    intervalId = setInterval(function() {
      document.body.style.backgroundColor = generateRandomColor();
    }, intervalSeconds * 1000);
  }
  
  // Function to stop changing background color
  function stopBackgroundColorChange() {
    clearInterval(intervalId);
  }
  
  // Function to handle interval input change
  function handleIntervalInputChange(event) {
    intervalSeconds = parseInt(event.target.value);
    if (!isNaN(intervalSeconds) && intervalSeconds > 0  && !isRunning) {
      stopBackgroundColorChange(); // Stop current interval
      startBackgroundColorChange(); // Start with new interval
    }
  }
  
  // Initialize the background color change
  startBackgroundColorChange();
 
  // Event listener for the start/stop button
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Stop';
  toggleButton.classList.add('btn', 'btn-danger');
  toggleButton.addEventListener('click', function() {
    if (toggleButton.textContent === 'Stop') {
      stopBackgroundColorChange();
      toggleButton.textContent = 'Start';
      toggleButton.classList.remove('btn-primary');
      toggleButton.classList.add('btn-success');
      toggleButton.style.background = "green";
    } else {
      startBackgroundColorChange();
      toggleButton.textContent = 'Stop';
      toggleButton.classList.remove('btn-success');
      toggleButton.classList.add('btn-primary');
      toggleButton.style.background = "red";
    }
  });
  
  // Insert the toggle button into the DOM
  document.querySelector('main').appendChild(toggleButton);
  
  // Event listener for interval input change
  const intervalInput = document.querySelector('input[type="number"]');
  intervalInput.addEventListener('change', handleIntervalInputChange);
  