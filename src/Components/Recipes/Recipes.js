import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesList from "./RecipesList";
import SearchBox from "../Search/SearchBox";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("https://fast-gorge-19257.herokuapp.com/recipe/all")
      .then((res) => setRecipes(res.data));
  }, []);

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const recipeFilter = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div>
      <SearchBox search={searchValueHandler} />
      <RecipesList recipes={recipeFilter} />
    </div>
  );
};

export default Recipes;
