import { Button, Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { has } from 'lodash';
import { useTranslation } from 'react-i18next';
import { BasicModalProps } from './TaskForm.types';
import { useNotification } from '~/context';
import { Modal } from '~/components';

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
    <Modal
      open={open}
      handleClose={handleClose}
      title={title}
      isForm={true}
      onSubmit={createNewTask}
    >
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
        <Button fullWidth variant='outlined' sx={{ mt: 1.5 }} onClick={handleClose} color='error'>
          {t('cancel')}
        </Button>
        <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
          {t('create')}
        </Button>
      </Box>
    </Modal>
  );
}
