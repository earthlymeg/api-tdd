//user has option to save recipe card
//on save, recipe card gets added to this component via database
import React from 'react';
import RecipeItem from './RecipeItem';
class SavedRecipes extends React.Component {
  constructor(props){
    super();
  }

  componentDidMount() {

  }

  render() {
    let {recipes} = this.props;
    return (
      <div className="card-container">
        {recipes.length > 0 &&
            recipes.map((recipe) => {
            return (
              <RecipeItem
                
                name={recipe.title}
                image={recipe.image}
                
              />
            );
          })}
      </div>
    )};
  
}

export default SavedRecipes;