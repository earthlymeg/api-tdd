//user has option to save recipe card
//on save, recipe card gets added to this component via database
import React from "react";
import SavedRecipeItem from "./SavedRecipeItem";
import axios from "axios";
class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/savedRecipes")
      .then((res) => this.setState({ recipes: res.data }))
      .catch((err) => console.log(err));
  }
  handleDelete(id) {
    axios
      .delete(`http://localhost:3001/savedRecipes/${id}`)
      .then(() =>
        axios
          .get("http://localhost:3001/savedRecipes")
          .then((res) => this.setState({ recipes: res.data }))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));

    // alert(`deleting ${id}`)
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
                handleDelete={this.handleDelete}
              />
            );
          })}
      </div>
    );
  }
}

export default SavedRecipes;
