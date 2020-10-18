import React from "react";
import "./App.css";

function Recipe(props) {
  return (
    <div className="recipe">
      <h3>{props.title}</h3>
      <img src={props.thumbnail} alt={props.title}></img>
      <figure>
        <figcaption>Ingredients</figcaption>
        <ol>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient + Math.random()}>{ingredient}</li>
          ))}
        </ol>
      </figure>
      <a href={props.href}>Try this</a>
    </div>
  );
}
export default Recipe;
