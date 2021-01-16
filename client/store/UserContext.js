/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

export const UserContext = createContext();

export default ({ children }) => {
  const [cookies] = useCookies();
  const [user, setUser] = useState({ verified: cookies.success });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
