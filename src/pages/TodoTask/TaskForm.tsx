import { Button, Box, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { has } from 'lodash';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { BasicModalProps, TaskFormValues } from './TodoTask.types';
import { useNotification } from '~/context';
import { Modal } from '~/components';

export default function TaskFormModal({
  open,
  handleClose,
  title,
  handleCreate,
  handleUpdate,
  defaultValues,
  id,
}: BasicModalProps) {
  const { t } = useTranslation('common');
  const notification = useNotification();
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<TaskFormValues>({
    defaultValues,
  });

  const createNewTask = handleSubmit((data) => {
    if (id) {
      handleUpdate(id, data);
      notification?.getSuccess(t('taskModified'));
    } else {
      handleCreate(data);
      notification?.getSuccess(t('taskCreated'));
    }
    handleClose();
    resetField('task');
    resetField('dueDate');
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name={'dueDate'}
          control={control}
          rules={{
            required: { value: true, message: t('requiredDueDate') },
          }}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              sx={{ width: '100%' }}
              disablePast
              label={t('dueDate')}
              onChange={onChange}
              value={value}
              slotProps={{
                textField: {
                  helperText: errors?.dueDate?.message,
                  error: has(errors, 'dueDate'),
                  label: t('dueDate'),
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
      <Box sx={{ display: 'flex', width: '100%', gap: '20px' }}>
        <Button fullWidth variant='outlined' sx={{ mt: 1.5 }} onClick={handleClose} color='error'>
          {t('cancel')}
        </Button>
        <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
          {id ? t('edit') : t('create')}
        </Button>
      </Box>
    </Modal>
  );
}
