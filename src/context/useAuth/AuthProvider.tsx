import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { getItem } from '~/utils';

export const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const registered = getItem('JWTtoken');
  const [isLogged, setIsLogged] = useState(registered);

  const login = () => {
    setIsLogged(true);
  };

  const logout = () => {
    setIsLogged(false);
  };

  const value = {
    login,
    logout,
    isLogged,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
