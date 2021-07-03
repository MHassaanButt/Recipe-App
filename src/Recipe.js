import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol>
        <h3>Recipe: </h3>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <h4>Calories: {calories}</h4>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
