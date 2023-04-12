import { Paper, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { has } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { SignUpFormValues } from './SignUp.types';
import { useSignUp } from './useSignUp';
import { Layout } from '~/components';
import { TextFieldForm, PasswordInput } from '~/components/FormFields';

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormValues>();

  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const { onSubmit } = useSignUp();

  return (
    <Layout>
      <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
        <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='h4'>
          {t('signUp')}
        </Typography>
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
          <TextFieldForm errors={errors} register={register} />
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
          <PasswordInput errors={errors} register={register} />
          <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
            {t('signUp')}
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px', paddingTop: '20px' }}>
          <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='subtitle2'>
            {t('haveAccount')}
          </Typography>
          <Link onClick={() => navigate('/signIn')} underline='hover' variant='subtitle2'>
            {t('signIn')}
          </Link>
        </Box>
      </Paper>
    </Layout>
  );
}

export default SignUp;
