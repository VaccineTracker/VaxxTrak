import React, { useState, useEffect }  from "react";
import Vaccine from './components/Vaccine.jsx'
import Login from './components/Login.jsx';

const App = () => {

  return (
    <div className="App">
      <h2>Queen</h2>
      <Vaccine />
      <h2>of the club</h2>
      <Login />
    </div>
  );
}

export default App;
