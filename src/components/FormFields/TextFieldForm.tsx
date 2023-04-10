import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { has } from 'lodash';
import { UseFormRegister } from 'react-hook-form';

const TextFieldInput = ({ errors, register }: { errors: any; register: UseFormRegister<any> }) => {
  const { t } = useTranslation('common');

  return (
    <TextField
      margin='normal'
      type='text'
      fullWidth
      label={t('email')}
      sx={{ mt: 2, mb: 1.5 }}
      {...register('email', {
        required: { value: true, message: t('requiredEmail') },
      })}
      error={has(errors, 'email')}
      helperText={errors?.email?.message}
    />
  );
};

export default TextFieldInput;
