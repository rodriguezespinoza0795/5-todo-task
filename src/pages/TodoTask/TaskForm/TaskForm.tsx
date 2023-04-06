import { Button, Typography, Modal, Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { has } from 'lodash';
import { useTranslation } from 'react-i18next';
import { BasicModalProps } from './TaskForm.types';
import { useNotification } from '~/context';

interface TaskFormValues {
  task: string;
}

export default function TaskFormModal({
  open,
  handleClose,
  title,
  handleComplete,
}: BasicModalProps) {
  const { t } = useTranslation('common');
  const notification = useNotification();
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskFormValues>();

  const createNewTask = handleSubmit(({ task }) => {
    handleComplete(task);
    notification?.getSuccess(t('taskCreated'));
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
            label={t('task')}
            sx={{ mt: 2, mb: 1.5 }}
            {...register('task', {
              required: { value: true, message: t('requiredTask') },
              minLength: {
                value: 5,
                message: t('taskMinLength'),
              },
            })}
            error={has(errors, 'task')}
            helperText={errors?.task?.message}
          />
          <Box sx={{ display: 'flex', width: '100%', gap: '20px' }}>
            <Button
              fullWidth
              variant='outlined'
              sx={{ mt: 1.5 }}
              onClick={handleClose}
              color='error'
            >
              {t('cancel')}
            </Button>
            <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
              {t('create')}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
