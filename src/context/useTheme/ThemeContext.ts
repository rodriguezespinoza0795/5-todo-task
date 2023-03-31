import React from 'react';

type ThemeProps = {
  toggleColorMode: () => void;
};

export const ThemeContext = React.createContext<ThemeProps | null>(null);
