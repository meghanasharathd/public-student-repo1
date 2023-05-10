import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Houses from "./Houses";
import axios from "axios";

function Navbar() {
  const [characters, setCharacters] = useState([]);
  const url = "https://thronesapi.com/api/v2/Characters";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <nav>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-link"} to="/search">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-link"} to="/houses">
              Houses
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search characters={characters} />} />
        <Route path="/houses" element={<Houses characters={characters} />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
