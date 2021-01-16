import React from 'react';

import DataProvider from './store/DataContext';
import UserProvider from './store/UserContext';
import MainContainer from './components/MainContainer.jsx';

import './assets/app.scss';

const App = () => {
  return (
    <UserProvider>
      <DataProvider>
        <div className="app">
          <MainContainer />
        </div>
      </DataProvider>
    </UserProvider>
  );
};

export default App;
