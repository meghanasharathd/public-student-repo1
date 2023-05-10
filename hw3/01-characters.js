// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

fetch(url);

const characterFlex = document.getElementById("characters-list");
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((c) => {
        let characterCard = document.createElement("div");
        characterCard.id = "thrones-characters";
        characterCard.classList = "card p-2 bg-transparent border-0 mx-auto align-items-center";

        let characterImage = document.createElement('img');
        characterImage.id = "thrones-img";
        characterImage.style = "width: 12rem; height: 14rem;";
        characterImage.alt = "card image";
        characterImage.src = c['imageUrl'];

        characterCard.appendChild(characterImage);

        //const imageUrl = document.getElementById("thrones-img");
        //imageUrl.src = c['imageUrl'];

        let characterDetails = document.createElement("card-body");
        characterDetails.classList = "text-center";

        let characterName = document.createElement('p');
        characterName.classList = "card-title fw-bold fs-4";
        characterName.innerText = c["fullName"];
        characterName.id = "character-name";

        characterDetails.appendChild(characterName);

        //const characterName = document.getElementById("character-name");
        //characterName.innerText = c["fullName"];

        let characterTitle = document.createElement('p');
        characterTitle.id = "character-title";
        characterTitle.classList = "card-text fw-bold fs-6";
        characterTitle.innerText = c["title"];

        characterDetails.appendChild(characterTitle);

        //const characterTitle = document.getElementById("character-title");
        //characterTitle.innerText = c["title"];

        characterCard.appendChild(characterDetails);

        characterFlex.appendChild(characterCard);
    })
  })
  .catch((error) => console.error(error));