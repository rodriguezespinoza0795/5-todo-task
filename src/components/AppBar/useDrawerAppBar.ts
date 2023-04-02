import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useDrawerAppbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { i18n } = useTranslation('common');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return { handleDrawerToggle, handleLanguage, mobileOpen };
};
