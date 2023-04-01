import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DrawerAppBar, ListItems, BasicModal } from '~/components';
import { useModal } from '~/hooks';

function TodoTask() {
  const { t } = useTranslation('common');
  const { open, handleOpen, handleClose } = useModal();

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh' }}
      >
        <DrawerAppBar>
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
                <ListItems />
              </Box>
              <Button fullWidth variant='contained' sx={{ mt: 1.5, mb: 3 }} onClick={handleOpen}>
                {t('createTask')}
              </Button>
            </Paper>
          </Grid>
        </DrawerAppBar>
      </Grid>
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title={'Crea una nueva tarea'}
      />
    </Container>
  );
}

export default TodoTask;
