
import React from "react";
import './App.css'
import RecipeItem from "./components/RecipeItem";
import RecipeForm from "./components/Form"
import axios from 'axios';
import test from './test'
import SavedRecipes from './components/SavedRecipes'
import { Route, BrowserRouter as Router } from
  "react-router-dom";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      recipes: [],
      savedRecipes: []
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


  }

  handleSave(recipeName, recipeImage) {
    axios.post('http://localhost:3001/savedRecipes',
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
      <Router>
        <div className="app">

          {/* <div>
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
          </div> */}
          <SavedRecipes handleDelete={this.handleDelete}/>
        </div>

        {/* <Route path="/myrecipes" exact 
        render=
        {(this.state.savedRecipes) => 
          <SavedRecipes {...this.state.savedRecipes}/>}
        
        /> */}

      </Router>

    )
  }

}



export default App;
