import { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DrawerAppBar, ListItems, BasicModal } from '~/components';
import { useModal } from '~/hooks';
import { isEmpty, last, includes, lowerCase } from 'lodash';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function TodoTask() {
  const { t } = useTranslation('common');
  const { open, handleOpen, handleClose } = useModal();
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);
  const [search, setSearch] = useState('');

  const addTask = (newTask: string) => {
    const newID = isEmpty(taskList) ? 1 : (last(taskList)?.id as number) + 1;
    setTaskList([...taskList, { id: newID, name: newTask, completed: false }]);
  };

  const deteteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const searchTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setFilteredTask(taskList.filter((task) => includes(lowerCase(task.name), lowerCase(search))));
  }, [search, taskList]);

  const completeTask = (id: number) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

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
                {t('completedTasks', {
                  completed: taskList.filter((task) => task.completed).length,
                  total: taskList.length,
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
                <ListItems
                  tasks={filteredTask}
                  deleteItem={deteteTask}
                  completeItem={completeTask}
                />
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
        action={addTask}
      />
    </Container>
  );
}

export default TodoTask;
