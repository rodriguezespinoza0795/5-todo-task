import { AlertColor } from '@mui/material';
import React, { useState } from 'react';
import { NotificationContext } from './NotificationContext';
import { Notification } from '~/components';

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const getError = (msg: string) => {
    setSeverity('error');
    setOpen(true);
    setMsg(msg);
  };

  const getSuccess = (msg: string) => {
    setSeverity('success');
    setOpen(true);
    setMsg(msg);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const value = {
    getError,
    getSuccess,
  };
  return (
    <NotificationContext.Provider value={value}>
      <Notification handleClose={handleClose} open={open} severity={severity} msg={msg} />
      {children}
    </NotificationContext.Provider>
  );
};
