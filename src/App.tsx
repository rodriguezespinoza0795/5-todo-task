import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AppBar, Listitems } from './components';
import { useNotification } from './context/useNotification/useNotification';

function App() {
  const { t } = useTranslation('common');
  const { getSuccess } = useNotification();

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh' }}
      >
        <AppBar>
          <Grid item>
            <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
              <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='h4'>
                {t('completedTasks', { completed: '2', total: '4' })}
              </Typography>
              <Box>
                <TextField
                  name='searchTask'
                  margin='normal'
                  type='text'
                  fullWidth
                  label={t('searchTask')}
                  sx={{ mt: 2, mb: 1.5 }}
                />
              </Box>
              <Box>
                <Listitems />
              </Box>
              <Button
                fullWidth
                variant='contained'
                sx={{ mt: 1.5, mb: 3 }}
                onClick={() => getSuccess('Se Creó una nueva tarea')}
              >
                {t('createTask')}
              </Button>
            </Paper>
          </Grid>
        </AppBar>
      </Grid>
    </Container>
  );
}

export default App;
