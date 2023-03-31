import React from 'react';

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

export const NotificationContext = React.createContext<ContextProps | null>(null);
