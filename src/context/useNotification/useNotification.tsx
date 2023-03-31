import React from 'react';
import { NotificationContext } from './NotificationContext';

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) throw new Error('No existe contexto');
  return context;
};
