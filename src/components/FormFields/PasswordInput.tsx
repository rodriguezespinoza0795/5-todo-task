import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { has } from 'lodash';
import { UseFormRegister } from 'react-hook-form';

const PasswordInput = ({ errors, register }: { errors: any; register: UseFormRegister<any> }) => {
  const { t } = useTranslation('common');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl
      error={has(errors, 'password')}
      fullWidth
      variant='outlined'
      sx={{ mt: 2, mb: 1.5 }}
    >
      <InputLabel htmlFor='outlined-adornment-password'>{t('password')}</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        {...register('password', {
          required: { value: true, message: t('requiredPassword') },
        })}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={t('password')}
      />
      <FormHelperText>{errors?.password?.message}</FormHelperText>
    </FormControl>
  );
};

export default PasswordInput;
