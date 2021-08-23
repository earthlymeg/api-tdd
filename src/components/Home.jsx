import React from "react";

import RecipeForm from "./Form";
import RecipeItem from "./RecipeItem";
import axios from 'axios';
import { Link } from
  "react-router-dom";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      savedRecipes: [],
    };
    this.searchForRecipe = this.searchForRecipe.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  searchForRecipe(ingredient) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}
        `
      )
      //take each res.data and create a card
      .then((res) => this.setState({ recipes: res.data }))
      .catch((err) => console.log(err));
  }

  handleSave(recipeName, recipeImage) {
    axios
      .post("http://localhost:3001/savedRecipes", {
        name: recipeName,
        image: recipeImage,
      })
      .then((r) => {
        console.log("successful post from front end");
      })
      .catch((err) => console.log("err at front", err));
  }

  render() {
    return (
      <div>
        <RecipeForm searchForRecipe={this.searchForRecipe} />
        <div><Link to="/savedRecipes"><button>Your Saved Recipes</button></Link>

          
        </div>
        <div className="card-container">
          {this.state.recipes.length > 0 &&
            this.state.recipes.map((recipe) => {
              return (
                <RecipeItem
                  key={recipe.id}
                  name={recipe.title}
                  image={recipe.image}
                  handleSave={this.handleSave}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Home;
