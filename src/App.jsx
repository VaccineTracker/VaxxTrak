import React, { useState, useEffect }  from "react";
import "./styles.css";
import Vaccine from './components/Vaccine'
const App = () => {

  

  return (
    <div className="App">
      <h2>Queen</h2>
      <Vaccine />
      <h2>of the club</h2>
      
    </div>
  );
}

export default App;
