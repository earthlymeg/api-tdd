
import React from "react";
import './App.css'
import RecipeItem from "./components/RecipeItem";
import RecipeForm from "./components/Form"
import axios from 'axios';
import test from './test'
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      recipes: test
    }
    this.searchForRecipe = this.searchForRecipe.bind(this);
  }

  searchForRecipe(ingredient) {

    // axios.get(
    //   `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}
    // `)
    //   //take each res.data and create a card
    //   .then(res => this.setState({ recipes: res.data }))
    //   .catch(err => console.log(err))
    alert('rendering recipes!')
    console.log(this.state)

  }

  render() {
    return (
      <div className="app">
        <div>
          Find your favorite recipes
        </div>
        <RecipeForm searchForRecipe={this.searchForRecipe} />
        <div className="card-container">
          {this.state.recipes.length > 0 && this.state.recipes.map(recipe =>
            {
             return <RecipeItem name={recipe.title} image={recipe.image} />
            }
          )}
        </div>
      </div>

    )
  }

}



export default App;
