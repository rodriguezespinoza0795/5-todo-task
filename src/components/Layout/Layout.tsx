import { Container, Grid } from '@mui/material';
import { DrawerAppBar } from '~/components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth='sm' sx={{ p: 0 }}>
      <Grid
        container
        direction='column'
        alignItems='center'
        sx={{
          minHeight: '100vh',
          maxWidth: '600px',
          justifyContent: { sm: 'center' },
          paddingTop: { xs: '2rem' },
        }}
      >
        <DrawerAppBar>
          <Grid item>{children}</Grid>
        </DrawerAppBar>
      </Grid>
    </Container>
  );
};

export default Layout;
