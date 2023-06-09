import { useState } from 'react';

export const useModal = (deleteFn?: (id: number) => void) => {
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = (id: number) => {
    setId(id);
    handleOpen();
  };

  const handleComplete = () => {
    if (deleteFn) {
      deleteFn(id);
    }
    handleClose();
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleConfirm,
    handleComplete,
  };
};
