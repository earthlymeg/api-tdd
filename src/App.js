
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
      recipes: [],
    }
    this.searchForRecipe = this.searchForRecipe.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  searchForRecipe(ingredient) {

    axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}
    `)
      //take each res.data and create a card
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err))
    // alert('rendering recipes!')

  }

  handleSave(recipeName, recipeImage) {
    axios.post('http://localhost:3000/savedRecipes',
      {
        name: recipeName,
        image: recipeImage
      }
    )
      .then(r => {
        console.log('successful post from front end')
      })
      .catch(err => console.log('err at front', err))

  }

  render() {
    return (
      <div className="app">

        <div>
          Find your favorite recipes
        </div>
        <RecipeForm searchForRecipe={this.searchForRecipe} />
        <div>
          <button>Your Saved Recipes</button>
        </div>
        <div className="card-container">
          {this.state.recipes.length > 0 && this.state.recipes.map(recipe => {
            return <RecipeItem
              key={recipe.id}
              name={recipe.title}
              image={recipe.image}
              handleSave={this.handleSave}
            />
          }
          )}
        </div>
      </div>

    )
  }

}



export default App;
