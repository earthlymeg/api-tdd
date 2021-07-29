//user has option to save recipe card
//on save, recipe card gets added to this component via database
import RecipeItem from './RecipeItem';
function SavedRecipes ({recipes}) {


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
    );
  
}

export default SavedRecipes;