import { Container, Grid, Paper, Typography, TextField, Button, Box, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTodoTask } from './useTodoTask';
import TaskForm from './TaskForm';
import { DrawerAppBar, ListItems, BasicTabs } from '~/components';
import { useModal, useTabs } from '~/hooks';

function TodoTask() {
  const { t } = useTranslation('common');
  const { open, handleOpen, handleClose } = useModal();
  const { tabOption, handleChange } = useTabs();
  const {
    taskList,
    filteredTask,
    deteteTask,
    updateTask,
    completeTask,
    searchTask,
    createTask,
    search,
    handleUpdate,
    handleCreate,
    id,
    defaultValues,
  } = useTodoTask(tabOption, handleOpen);
  const totalTasks = taskList?.length;

  return (
    <Container maxWidth='sm' sx={{ p: 0 }}>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh', maxWidth: '600px' }}
      >
        <DrawerAppBar>
          <Grid item>
            <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
              <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='h4'>
                {t('completedTasks', {
                  completed: taskList?.filter((task) => task.completed).length,
                  total: totalTasks,
                })}
              </Typography>
              <Box>
                <TextField
                  name='searchTask'
                  margin='normal'
                  type='text'
                  fullWidth
                  label={t('searchTask')}
                  sx={{ mt: 2, mb: 1.5 }}
                  value={search}
                  onChange={searchTask}
                />
              </Box>
              <Box>
                <BasicTabs tabOption={tabOption} handleChange={handleChange}>
                  <Tab label={t('all')} />
                  <Tab label={t('pending')} />
                  <Tab label={t('completed')} />
                </BasicTabs>
                <Paper
                  sx={{
                    padding: '1.2em',
                    borderRadius: '0 0 0.5em 0.5em',
                    height: '30vh',
                    overflow: 'scroll',
                  }}
                >
                  {filteredTask?.length ? (
                    <ListItems
                      tasks={filteredTask}
                      deleteItem={deteteTask}
                      updateTask={handleUpdate}
                      completeItem={completeTask}
                    />
                  ) : (
                    <Box
                      sx={{
                        display: 'grid',
                        height: '100%',
                        placeContent: 'center',
                      }}
                    >
                      <Typography variant='h6' textAlign={'center'}>
                        {totalTasks ? t('noMatchesFound') : t('noPendingTasks')}
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </Box>
              <Button fullWidth variant='contained' sx={{ mt: 1.5, mb: 3 }} onClick={handleCreate}>
                {t('createTask')}
              </Button>
            </Paper>
          </Grid>
        </DrawerAppBar>
      </Grid>
      {open && (
        <TaskForm
          open={open}
          handleClose={handleClose}
          title={id ? t('editTask') : t('newTask')}
          handleCreate={createTask}
          handleUpdate={updateTask}
          defaultValues={defaultValues}
          id={id}
        />
      )}
    </Container>
  );
}

export default TodoTask;
