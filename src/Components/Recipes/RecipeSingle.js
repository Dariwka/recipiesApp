import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const RecipeSingle = () => {
  const [recipes, setRecipe] = useState();

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (!recipes) {
      axios
        .get("https://fast-gorge-19257.herokuapp.com/recipe/find/" + id)
        .then((res) => setRecipe(res.data));
    }
  });

  let recipeData = undefined;

  if (!recipes) {
    recipeData = <h1>Loading...</h1>;
  }
  if (recipes) {
    recipeData = (
      <>
        <div key={recipes.id}>
          <Container className="single">
            <h3>{recipes.name}</h3>
            <p>
              <Image
                src={`assets/img/${recipes.image}.jpg`}
                height={400}
                alt={recipes.name}
                rounded
              />
              <strong>Description:</strong> {recipes.description}
            </p>
            <div>
              <p>
                <strong>Category:</strong> {recipes.recipeCategory}
              </p>
              <p>
                <strong>Area:</strong> {recipes.recipeCuisine}
              </p>
              <p>
                <strong>Cooking Time: </strong>
                {recipes.cookTime}
              </p>
              <p>
                <strong>Ingredients:</strong>
              </p>
              <ul>
                {recipes.recipeIngredient.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.quantity} ({item.ingName})
                    </li>
                  );
                })}
              </ul>
              <p>
                <strong>Instructions:</strong> {recipes.recipeInstructions}
              </p>
            </div>
            <button className="backToRecipe" onClick={() => history.goBack()}>
              Back to recipes
            </button>
          </Container>
        </div>
      </>
    );
  }
  return <div>{recipeData}</div>;
};

export default RecipeSingle;
