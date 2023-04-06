import { createContext } from 'react';

interface ThemeProps {
  toggleColorMode: () => void;
}

export const ThemeContext = createContext<ThemeProps | null>(null);
