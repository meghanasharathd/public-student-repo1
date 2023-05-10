// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
let app = document.querySelector('#results');

app.style.display = 'flex';
app.style.flexBasis = 'auto';
app.style.flexDirection = 'row';
app.style.flexFlow = 'row wrap';
app.style.alignItems = 'column';
app.style.width = '100%';
app.style.margin = '0 auto';

const addCharacterToDom = (character) => {
  let element = document.createElement('figure');
  let Picture = document.createElement('img');
  let name = document.createElement('figcaption');
  let title = document.createElement('figcaption');

  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.width = '25%';
  element.style.margin = '0 auto';

  Picture.src = character.imageUrl;
  Picture.alt = character.fullName;
  Picture.width = '100 px';
  Picture.height = '100 px';
  Picture.style.display = 'flex';
  Picture.style.flexDirection = 'column';
  Picture.style.alignItems = 'center';
  Picture.style.margin = '0 auto';
  Picture.style.width = '20vw';
  Picture.style.height = '20vw';
  name.textContent = character.fullName;
  title.textContent = character.title;

  element.addEventListener('mouseover', (event) => {
    event.target.style.color = `rgb(255, 255, 255)`;
    event.target.style.backgroundColor = '#800080';
  });
  element.addEventListener('mouseout', (event) => {
    event.target.style.color = `initial`;
    event.target.style.backgroundColor = 'initial';
  });

  element.append(Picture);
  element.append(name);
  element.append(title);

  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((character) => {
        addCharacterToDom(character);
      });
    })
    .catch((error) => {
      console.error(error);
      let element = document.createElement('div');
      element.textContent = 'An error occured. please reload.';
      app.append(element);
    });
};

fetchData(url);
