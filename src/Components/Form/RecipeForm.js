import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import "./Form.css";

const RecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    recipeCategory: "",
    recipeCuisine: "",
    cookTime: "",
    description: "",
    recipeIngredient: [],
    recipeInstructions: "",
  });

  const [recipeIngredient, setIngredient] = useState([
    { id: 1, quantity: "", ingName: "" },
  ]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngData = (e, i) => {
    const { name, value } = e.target;
    const list = [...recipeIngredient];
    list[i][name] = value;
    setIngredient(list);
    setData({ ...data, recipeIngredient: recipeIngredient });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newIng = {
      id: recipeIngredient.length + 1,
      ingName: "",
      quantity: "",
    };
    setIngredient([...recipeIngredient, newIng]);
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post("https://fast-gorge-19257.herokuapp.com/recipe/add", data);
  };

  return (
    <>
      <Form onSubmit={submitData} className="form">
        <Form.Group>
          <Form.Label htmlFor="name">Name: </Form.Label>
          <Form.Control type="text" name="name" onChange={changeData} />
        </Form.Group>
        <Form.Group>
          <Form.File id="image" label="Photo of Recipe" onChange={changeData} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="recipeCategory">Category: </Form.Label>
          <Form.Control
            type="text"
            name="recipeCategory"
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="recipeCuisine">Area: </Form.Label>
          <Form.Control
            type="text"
            name="recipeCuisine"
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="cookTime">Cooking Time: </Form.Label>
          <Form.Control type="text" name="cookTime" onChange={changeData} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Description: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="description"
            onChange={changeData}
          />
        </Form.Group>

        <p>Ingredients: </p>
        {recipeIngredient.map((_, i) => {
          return (
            <div key={i}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label htmlFor="quantity">Quantity: </Form.Label>
                    <Form.Control
                      type="text"
                      name="quantity"
                      onChange={(e) => changeIngData(e, i)}
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="ingName">Ingredient: </Form.Label>
                    <Form.Control
                      type="text"
                      name="ingName"
                      onChange={(e) => changeIngData(e, i)}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </div>
          );
        })}

        <Button className="addMore" variant="outline-success" onClick={addMore}>
          add more
        </Button>
        <Form.Group>
          <Form.Label htmlFor="recipeInstructions">Instructions: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="recipeInstructions"
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Button
                className="post"
                size="lg"
                block
                type="submit"
                variant="success"
                value="Send data"
              >
                Post recipe
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};
export default RecipeForm;
