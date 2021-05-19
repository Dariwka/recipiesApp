import React from "react";
import RecipesCard from "./RecipesCard";

import "../Recipes/Recipes.css";

const RecipesList = ({ recipes }) => {
  return (
    <div className="recipiesLists">
      {recipes.map((recipes) => (
        <RecipesCard
          key={recipes.id}
          name={recipes.name}
          img={recipes.image}
          description={recipes.description}
          recipeCuisine={recipes.recipeCuisine}
          recipeCategory={recipes.recipeCategory}
          link={recipes.id}
          id={recipes.id}
        />
      ))}
    </div>
  );
};

export default RecipesList;
