import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { has } from 'lodash';
import { DrawerAppBar } from '~/components';

export interface LoginFormValues {
  username: string;
  password: string;
}

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>();

  const { t } = useTranslation('common');

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
  });

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
                Login
              </Typography>
              <Box component='form' onSubmit={onSubmit}>
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
                <TextField
                  margin='normal'
                  type='password'
                  fullWidth
                  label={t('password')}
                  sx={{ mt: 2, mb: 1.5 }}
                  {...register('password', {
                    required: { value: true, message: t('requiredPassword') },
                    minLength: {
                      value: 8,
                      message: t('PasswordMinLength'),
                    },
                  })}
                  error={has(errors, 'password')}
                  helperText={errors?.password?.message}
                />
                <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
                  Login
                </Button>
              </Box>
            </Paper>
          </Grid>
        </DrawerAppBar>
      </Grid>
    </Container>
  );
}

export default Login;
