import React from "react";
import '../styles/form.css'
import {FiSearch} from 'react-icons/fi'
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
    this.setState({ recipeName: e.target.value }, () => console.log(this.state));
  }

  handleSubmit(event) {
      event.preventDefault();
      // alert(this.state.recipeName)
      this.props.searchForRecipe(this.state.recipeName)

  }


  render() {
    return (
      <div className="form">
        <form>
          {/* store recipe name in state */}
          <input
          className="search"
            type="text"
            placeholder="Recipe Name"
            onChange={this.handleChange}
          ></input>
          {/* on click, make api call at parent */}
         
          <FiSearch
          className="magnifying-glass"
          onClick={e => this.handleSubmit(e)}/>
        </form>
      </div>
    );
  }
}

export default Form;
