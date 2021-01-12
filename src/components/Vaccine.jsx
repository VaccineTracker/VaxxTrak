import React, { useState, useEffect }  from "react";
import Search from "./Search.jsx";


class Vaccine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: '' };

    this.getZip = this.getZip.bind(this);
  }
  getZip(zip) {
    this.setState(zip)    
  }
  
    render() {
      return (
        <div className="vaccineMain">
          <div className="search">
            <br></br>
            <Search getZip={this.getZip} />
            <br></br>
          </div>
          <div className="vaccineChart"> chart renders here </div>
        </div>
      )

    }
};


  

export default Vaccine;