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
      recipes: []
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
      //take each res.data and create a card/save to state
      
      
      //check if id exists in local storage, if so add favorited 
      .then((res) => 
      {

      //checkt is res.data.id exists in local storage, if yes add 
        //else 
        res.data.forEach( recipe => {
          
          if (this.state.saved.includes(recipe.id)) {
            //it does, favorited = true
            let favedRecipe = recipe;
            favedRecipe['favorited'] = true;
            let joined = this.state.recipes.concat(favedRecipe);
            this.setState({recipes: joined})
          } else {
            let unfavedRecipe = recipe;
            unfavedRecipe['favorited'] = false;
            let joined = this.state.recipes.concat(unfavedRecipe);
            this.setState({recipes: joined})
          }
          
        })

        
      })
      
      
      // this.setState({ recipes: res.data }))
      .catch((err) => console.log(err));
  }

  handleSave(recipeName, recipeImage, id) {
    //save copy of saved recipes to state
    if (localStorage.getItem("favorited")) {
      let joined = JSON.parse(localStorage.getItem('favorited'));
      let newJoin = joined.concat(id)
      localStorage.favorited = JSON.stringify(newJoin)
      
   
    } else {
      let faveObj = [id];
      localStorage.favorited = JSON.stringify(faveObj)
      
    }
    
    
    axios
      .post("http://localhost:3001/savedRecipes", {
        name: recipeName,
        image: recipeImage,
        id: id
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
                  id={recipe.id}
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
