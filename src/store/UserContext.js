/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [cookies] = useCookies();

  useEffect(() => {
    if (cookies.success) {
      setUser({ ...user, verified: cookies.success, loggedIn: true });
    } else {
      setUser({ ...user, verified: null, loggedIn: false });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
