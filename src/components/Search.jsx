
import React, { useState, useEffect } from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { zip: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };
  handleChange(evt) {
    this.setState({ 
      [evt.target.name]: evt.target.value
     });
  };

  handleSubmit(evt) {
    evt.preventDefault(); //keeps page from reloading
    //will eventually take this input and pass it to Vaccine search
    alert("looking good, feeling great: " + this.state.zip);
    this.setState({ value: "" });
  };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="zip">
            ZIP Code:  
           <input
              id="zip"
              name="zip"
              type="text"
              placeholder="90210"
              value={this.state.zip}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="submit"
          />
        </form>
      )
    };
  };

export default Search;