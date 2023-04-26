import { Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDrawerAppbar } from './useDrawerAppBar';

const MenuProfile = () => {
  const { handleMenu, anchorEl, handleClose, logOut } = useDrawerAppbar();
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  return (
    <div>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logOut}>{t('logOut')}</MenuItem>
        <MenuItem onClick={() => navigate('/admin')}>{t('admin')}</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuProfile;
