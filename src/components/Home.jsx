import React from "react";
import '../styles/home.css'
import RecipeForm from "./Form";
import RecipeItem from "./RecipeItem";
import axios from 'axios';
import Footer from './Footer'
import test from '../test'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: test,
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
      <div className="home">
        <div className="home-wrapper">
        <h2>What do you want to cook today?</h2>
        <RecipeForm searchForRecipe={this.searchForRecipe} />
        <div>

          
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
        <Footer/>
      </div>
    );
  }
}

export default Home;
