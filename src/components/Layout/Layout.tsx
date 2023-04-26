import { Container, Grid } from '@mui/material';
import type { Breakpoint } from '@mui/material';
import { DrawerAppBar } from '~/components';

const Layout = ({ children, width = 'sm' }: { children: React.ReactNode; width?: Breakpoint }) => {
  return (
    <Container maxWidth={width} sx={{ p: 0 }}>
      <Grid
        container
        direction='column'
        alignItems='center'
        sx={{
          minHeight: '100vh',
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
