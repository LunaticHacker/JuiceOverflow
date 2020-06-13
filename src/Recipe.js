import React from "react";
import "./App.css";

function Recipe(props) {
  return (
    <div className="recipe">
      <h3>{props.title}</h3>
      <img src={props.thumbnail} alt={props.title}></img>
      <h6>Ingredients</h6>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient + Math.random()}>{ingredient}</li>
        ))}
      </ol>
      <a href={props.href}>Try this</a>
    </div>
  );
}
export default Recipe;
