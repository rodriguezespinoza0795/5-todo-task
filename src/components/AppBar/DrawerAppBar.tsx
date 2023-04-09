import { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { DrawerAppBarProps } from './DrawerAppBar.types';
import { useDrawerAppbar } from './useDrawerAppBar';
import { useThemeMode } from '~/context';

const drawerWidth = 240;

export default function DrawerAppBar(props: DrawerAppBarProps) {
  const { window, children } = props;
  const { t } = useTranslation('common');
  const theme = useTheme();
  const colorMode = useThemeMode();
  const { handleDrawerToggle, handleLanguage, mobileOpen } = useDrawerAppbar();
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        DRE
      </Typography>
      <Divider />
      <List>
        <ListItemButton onClick={handleLanguage}>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText primary={t('language')} />
        </ListItemButton>
        <ListItemButton onClick={colorMode?.toggleColorMode}>
          <ListItemIcon>
            {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
          </ListItemIcon>
          <ListItemText primary={theme.palette.mode === 'dark' ? t('lightMode') : t('darkMode')} />
        </ListItemButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            DRE
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Tooltip title={theme.palette.mode === 'dark' ? t('lightMode') : t('darkMode')}>
              <IconButton sx={{ ml: 1 }} onClick={colorMode?.toggleColorMode} color='inherit'>
                {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            <Tooltip title={t('language')}>
              <IconButton
                size='large'
                aria-label='language system'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleLanguage}
                color='inherit'
              >
                <TranslateIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {auth ? (
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
                <MenuItem onClick={handleClose}>{t('signIn')}</MenuItem>
              </Menu>
            </div>
          ) : (
            <Tooltip title={t('signIn')}>
              <IconButton
                size='large'
                aria-label='language system'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={() => navigate('/signIn')}
                color='inherit'
              >
                <LoginIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main'>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
