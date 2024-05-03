characterCards



function renderCharacterCards(characters) {
    const characterCardsContainer = document.getElementById('characterCards');
    characterCardsContainer.innerHTML = ''; 

    if (characters.length === 0 ) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = 'No results found.';
        characterCardsContainer.appendChild(noResultsMessage);
        return; 
    }
    // Adding Bootstrap classes dynamically
    characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style = 'width: 18rem; margin-bottom: 10px;';
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = character.name;
  
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = character.birth_year;
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
  
      card.appendChild(cardBody);
  
      characterCardsContainer.appendChild(card);
    });
  }
  
  function highlightMatch(text, userInput) {
    const escapedUserInput = userInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  renderCharacterCards(characters);
  
  //handles the onlcick function
  document.getElementById('characterButton').addEventListener('input', function(){
  
    const userInput = document.getElementById('userInput').value;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(userInput.toLowerCase());
      
    });
  });
    renderCharacterCards(filteredCharacters);
  

  document.getElementById('userInput').addEventListener('input', function() {
    const characterCardsContainer = document.getElementById('characterCards');
    characterCardsContainer.innerHTML = ''; // Clear existing content
  });