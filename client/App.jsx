import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { useDispatch } from 'react-redux';
import { loginUser } from './redux/actions/actions';

import DataProvider from './store/DataContext';
import UserProvider from './store/UserContext';
import MainContainer from './containers/MainContainer.jsx';

import './assets/app.scss';

const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  useEffect(() => cookies.success && dispatch(loginUser(cookies.success)), []);

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
