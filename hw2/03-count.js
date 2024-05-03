// Add your code here

    const originalText = document.getElementById('userInput').addEventListener('input', function() {
    const userInput = this.value.trim().toLowerCase();
    const textToHighlight = document.getElementById('textToHighlight');
    const text = textToHighlight.textContent.toLowerCase();
    
    if (userInput === '') {
      // Remove highlighting if input is empty
      textToHighlight.innerHTML = textToHighlight.textContent;
      return;
    }
    
    const regex = new RegExp(userInput, 'gi');
    const highlightedText = text.replace(regex, match => `<mark>${match}</mark>`);
    
    textToHighlight.innerHTML = highlightedText;
  });