import { createContext } from 'react';

type ContextProps = {
  login: () => void;
  logout: () => void;
  isLogged: boolean;
};

export const AuthContext = createContext<ContextProps | null>(null);
