import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { has } from 'lodash';
import { useTranslation } from 'react-i18next';
import { TaskFormValues } from '~/pages/TodoTask/TodoTask.types';

const DatePickerInput = ({
  control,
  errors,
}: {
  control: Control<TaskFormValues, any>;
  errors: FieldErrors<TaskFormValues>;
}) => {
  const { t } = useTranslation('common');

  return (
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
  );
};

export default DatePickerInput;
