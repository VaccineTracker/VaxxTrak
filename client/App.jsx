import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { useDispatch } from 'react-redux';
import { loginUser } from './redux/actions/actions';

import MainContainer from './containers/MainContainer.jsx';

import './assets/app.scss';

export default function App() {
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  useEffect(() => cookies.success && dispatch(loginUser(cookies.success)), []);

  return (
    <div className="app">
      <MainContainer />
    </div>
  );
}
