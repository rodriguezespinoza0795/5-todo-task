import { Button, Typography, Modal, Box, TextField } from '@mui/material';
import { useNotification } from '~/context';
import { BasicModalProps } from './Modal.types';
import { useForm } from 'react-hook-form';
import { has } from 'lodash';

interface TaskFormValues {
  task: string;
}

export default function BasicModal({
  open,
  handleOpen,
  handleClose,
  title,
  action,
}: BasicModalProps) {
  const { getSuccess } = useNotification();
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskFormValues>();

  const createNewTask = handleSubmit(({ task }) => {
    action(task);
    getSuccess('Se Creó una nueva tarea');
    handleClose();
    resetField('task');
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          component='form'
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 400,
            width: '100%',
            minWidth: 320,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={createNewTask}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {title}
          </Typography>
          <TextField
            margin='normal'
            type='text'
            fullWidth
            label={'new task'}
            sx={{ mt: 2, mb: 1.5 }}
            {...register('task', {
              required: { value: true, message: 'Task is required' },
              minLength: {
                value: 5,
                message: 'Task cannot be less than 5 character',
              },
            })}
            error={has(errors, 'task')}
            helperText={errors?.task?.message}
          />
          <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
            Button Text
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
