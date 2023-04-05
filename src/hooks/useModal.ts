import { useState } from 'react';

export const useModal = (deleteFn: (id: number) => void) => {
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleconfirm = (id: number) => {
    setId(id);
    handleOpen();
  };

  const handlecomplete = () => {
    deleteFn(id);
    handleClose();
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleconfirm,
    handlecomplete,
  };
};
