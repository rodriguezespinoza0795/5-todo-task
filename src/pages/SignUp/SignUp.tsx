import { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { has } from 'lodash';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DrawerAppBar } from '~/components';

export interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
}

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormValues>();

  const { t } = useTranslation('common');

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
                {t('signUp')}
              </Typography>
              <Box component='form' onSubmit={onSubmit}>
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
                <TextField
                  margin='normal'
                  type='text'
                  fullWidth
                  label={t('username')}
                  sx={{ mt: 2, mb: 1.5 }}
                  {...register('username', {
                    required: { value: true, message: t('requiredUsername') },
                    minLength: {
                      value: 5,
                      message: t('usernameMinLength'),
                    },
                  })}
                  error={has(errors, 'username')}
                  helperText={errors?.username?.message}
                />
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
                      minLength: {
                        value: 8,
                        message: t('PasswordMinLength'),
                      },
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
                <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
                  {t('signUp')}
                </Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px', paddingTop: '20px' }}>
                <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='subtitle2'>
                  {t('haveAccount')}
                </Typography>
                <Link href='#' underline='hover' variant='subtitle2'>
                  {t('signIn')}
                </Link>
              </Box>
            </Paper>
          </Grid>
        </DrawerAppBar>
      </Grid>
    </Container>
  );
}

export default SignUp;
