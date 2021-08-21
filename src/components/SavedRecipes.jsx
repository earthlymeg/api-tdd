//user has option to save recipe card
//on save, recipe card gets added to this component via database
import React from 'react';
import SavedRecipeItem from './SavedRecipeItem';
import axios from 'axios';
class SavedRecipes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }

    
  }

  componentDidMount() {
    console.log('making a get request!')
    axios.get('http://localhost:3001/savedRecipes')
    .then((res) => this.setState({recipes: res.data}))
    .catch(err => console.log(err))

  }

  render() {
    
    return (
      <div className="card-container">
        {this.state.recipes.length > 0 &&
            this.state.recipes.map((recipe) => {

            return (
              <SavedRecipeItem
                key={recipe._id}
                name={recipe.name}
                image={recipe.image}
                id={recipe._id}
                handleDelete={this.props.handleDelete}
              />
            );
          })}
          
      </div>
    )};
  
}

export default SavedRecipes;