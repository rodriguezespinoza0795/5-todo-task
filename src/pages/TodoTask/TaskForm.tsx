import { Button, Box, TextField, Autocomplete } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { has } from 'lodash';
import { useTranslation } from 'react-i18next';
import { BasicModalProps, TaskFormValues, Category } from './TodoTask.types';
import { useNotification } from '~/context';
import { Modal } from '~/components';
import { DatePickerInput } from '~/components/FormFields';

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

  const categories: Category[] = [
    { value: 1, label: 'Work', color: '#512D12' },
    { value: 2, label: 'School', color: '#54754B' },
    { value: 3, label: 'Leisure', color: '#8251AB' },
    { value: 4, label: 'Other', color: '#7C7B82' },
  ];

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
        sx={{ my: 1.5 }}
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
      <DatePickerInput control={control} errors={errors} />
      <Controller
        control={control}
        name={'category'}
        rules={{
          required: {
            value: true,
            message: t('requiredCategory'),
          },
          validate: ({ value }) => value !== 0 || (t('requiredCategory') as string),
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ width: '100%', my: 1.5 }}
            onChange={(event, item) => {
              onChange(item);
            }}
            value={value}
            options={categories}
            renderInput={(params: any) => (
              <TextField
                {...params}
                label={t('category')}
                error={has(errors, 'category')}
                helperText={errors?.category?.message}
              />
            )}
          />
        )}
      />
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
