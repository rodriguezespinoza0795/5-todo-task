import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '~/utils';
import { useAuth } from '~/context';

export const useDrawerAppbar = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { i18n } = useTranslation('common');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    handleClose();
    auth?.logout();
    removeItem('JWTtoken');
    navigate('/signIn');
  };

  return {
    handleDrawerToggle,
    handleLanguage,
    mobileOpen,
    auth,
    handleMenu,
    anchorEl,
    handleClose,
    logOut,
  };
};
