import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DrawerAppBar } from '~/components';
import { TextFieldForm } from '~/components/FormFields';

interface PasswordResetFormValues {
  email: string;
}

function PasswordReset() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordResetFormValues>();

  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
    navigate('/SignIn');
  });

  return (
    <Container maxWidth='sm' sx={{ p: 0 }}>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{
          minHeight: '100vh',
          maxWidth: '600px',
          justifyContent: { sm: 'center' },
          paddingTop: { xs: '2rem' },
        }}
      >
        <DrawerAppBar>
          <Grid item>
            <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
              <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='h4'>
                {t('resetPassword')}
              </Typography>
              <Box component='form' onSubmit={onSubmit}>
                <TextFieldForm errors={errors} register={register} />
                <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
                  {t('reset')}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </DrawerAppBar>
      </Grid>
    </Container>
  );
}

export default PasswordReset;
