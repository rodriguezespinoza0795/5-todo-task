import { Container, Grid, Paper, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { has } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { SignInFormValues } from './SignIn.types';
import { setItem } from '~/utils';
import { DrawerAppBar } from '~/components';
import { PasswordInput } from '~/components/FormFields';

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormValues>();

  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    setItem('usarData', data);
    window.location.reload();
    navigate('/');
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
                {t('signIn')}
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
                <PasswordInput errors={errors} register={register} />
                <Link onClick={() => navigate('/reset')} underline='hover'>
                  {t('forgottenPassword')}
                </Link>
                <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
                  {t('signIn')}
                </Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px', paddingTop: '20px' }}>
                <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='subtitle2'>
                  {t('noAccount')}
                </Typography>
                <Link onClick={() => navigate('/signUp')} underline='hover' variant='subtitle2'>
                  {t('signUp')}
                </Link>
              </Box>
            </Paper>
          </Grid>
        </DrawerAppBar>
      </Grid>
    </Container>
  );
}

export default SignIn;
