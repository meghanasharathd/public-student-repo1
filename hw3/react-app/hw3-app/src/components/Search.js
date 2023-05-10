import React, { useState } from "react";

function SearchCharacter({characters}) {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchCharacter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
        let searchedCharacters = [];
        characters.forEach(element => {
            if(element.fullName.includes(searchCharacter))
            {
                searchedCharacters.push(element);
            }
        });
        setResults(searchedCharacters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mx-auto mt-3 mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search character"
          value={searchCharacter}
          onChange={handleInputChange}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
      <div>
        {results.map((character) => (
          <div key={character.id} className="mt-5">
            <p>{character.fullName}</p>
            <img src={character.imageUrl} alt={character.fullName} />
          </div>
        ))}
      </div>
    </form>
  );
}

export default SearchCharacter;
