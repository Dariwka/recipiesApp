import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Recipes from "../Components/Recipes/Recipes";

import Contacts from "../Pages/Contacts";
import Home from "../Pages/Home";
import AddRecipe from "../Pages/AddRecipe";
import RecipeSingle from "./Recipes/RecipeSingle";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/recipiesApp" exact component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/addrecipe" component={AddRecipe} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/single/:id">
            <RecipeSingle />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
