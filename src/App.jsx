import React from "react";

import UserProvider from './store/UserContext';
import MainContainer from './components/MainContainer.jsx';

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <MainContainer />
      </div>
    </UserProvider>
  );
}

export default App;