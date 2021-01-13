import React, { useContext } from 'react';

import { UserContext } from '../store/UserContext';

import Vaccine from './Vaccine.jsx';
import Login from './Login.jsx';

export default () => {
  const [user] = useContext(UserContext);

  return user && user.loggedIn ? (
    <div className="main-container">
      <Vaccine />
    </div>
  ) : (
    <div className="main-container">
      <Login />
      <Vaccine />
    </div>
  );
};
