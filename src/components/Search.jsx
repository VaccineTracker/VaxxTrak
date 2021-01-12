
import React, { useState, useEffect } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    handleChange(evt) {
      
      // this.setState({ value: evt.target.value });
    };

    handleSubmit(evt) {
      // alert("looking good, feeling great: " + this.state.value);
      // evt.preventDefault(); //keeps page from reloading
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            ZIP Code:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
      )
    };
  }
};

export default Search;