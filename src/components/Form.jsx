import React from "react";

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      recipeName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ recipeName: e.target.value });
  }

  handleSubmit(event) {
      event.preventDefault();
      this.props.searchForRecipe(this.state.recipeName)

  }


  render() {
    return (
      <div>
        <form>
          {/* store recipe name in state */}
          <input
            type="text"
            placeholder="Recipe Name"
            onChange={this.handleChange}
          ></input>
          {/* on click, make api call at parent */}
          <button type="submit"
          onClick={e => this.handleSubmit(e)}
          >Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
