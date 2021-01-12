import React, { useState, useEffect }  from "react";
import Search from "./Search.jsx";


class Vaccine extends React.Component {
  constructor(props) {
    super(props);
  }
    
    render() {
      return (
        <div className="vaccineMain">
          <div className="search">
            <p>this is a cute search bar</p>
            <Search getZip={this.getZip} />
          </div>
          <div className="vaccineChart">a gorgeous chart</div>
        </div>
      )

    }
};


  

export default Vaccine;