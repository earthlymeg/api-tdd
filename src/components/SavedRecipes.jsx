//user has option to save recipe card
//on save, recipe card gets added to this component via database
import React from 'react';
class SavedRecipes extends React.Component {
    // constructor() {
    //     super();
    // }
  render() {
    return (
      <div className="card-container">
        {/* {this.state.recipes.length > 0 &&
          this.state.recipes.map((recipe) => {
            return (
              <RecipeItem
                key={recipe.id}
                name={recipe.title}
                image={recipe.image}
                handleSave={this.handleSave}
              />
            );
          })} */}
      </div>
    );
  }
}
