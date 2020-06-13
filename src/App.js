import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const [term, setTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("vegan");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${search}&p=${page}`
      );

      const json = await res.json();
      setRecipes(json.results);
    };
    fetchAPI();
  }, [search, page]);

  const updateTerm = (e) => {
    setTerm(e.target.value);
  };
  const updatePage = () => {
    setPage(page + 1);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setSearch(term);
  };
  return (
    <div className="App">
      <form className="form" onSubmit={getSearch}>
        <input
          className="searchBar"
          type="text"
          value={term}
          onChange={updateTerm}
        ></input>
        <button className="searchButton">Search</button>
      </form>
      {recipes.map((recipe) => (
        <div className="recipes">
          <Recipe
            key={recipe.href}
            title={recipe.title}
            thumbnail={recipe.thumbnail}
            ingredients={recipe.ingredients.split(",")}
            href={recipe.href}
          />
        </div>
      ))}
      <button type="button" onClick={updatePage} className="loadMoreButton">
        Load More
      </button>
    </div>
  );
}

export default App;
