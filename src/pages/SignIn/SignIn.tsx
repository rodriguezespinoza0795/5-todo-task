import { Paper, Typography, Button, Box, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SignInFormValues } from './SignIn.types';
import { useSignIn } from './useSignIn';
import { Layout } from '~/components';
import { PasswordInput, TextFieldForm } from '~/components/FormFields';

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormValues>();

  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const { onSubmit } = useSignIn();

  return (
    <Layout>
      <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
        <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='h4'>
          {t('signIn')}
        </Typography>
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
          <TextFieldForm errors={errors} register={register} />
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
    </Layout>
  );
}

export default SignIn;
