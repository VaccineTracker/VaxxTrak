import React, { useState, useEffect }  from "react";
import Vaccine from './components/Vaccine.jsx'
import Login from './components/Login.jsx';

const App = () => {

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Vaccine</h2>
      <Vaccine />
      <h2>Login</h2>
      <Login />
    </div>
  );
}

export default App;
