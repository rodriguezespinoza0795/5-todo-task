import { createContext } from 'react';

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

export const NotificationContext = createContext<ContextProps | null>(null);
