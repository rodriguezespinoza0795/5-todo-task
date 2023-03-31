import React from 'react';
import { ThemeContext } from './ThemeContext';

export const useThemeMode = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('No existe contexto');
  return context;
};
