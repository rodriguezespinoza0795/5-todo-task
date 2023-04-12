import { Paper, Typography, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PasswordResetFormValues } from './PasswordReset.types';
import { usePasswordReset } from './usePasswordReset';
import { Layout } from '~/components';
import { TextFieldForm } from '~/components/FormFields';

function PasswordReset() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordResetFormValues>();

  const { t } = useTranslation('common');
  const { onSubmit } = usePasswordReset();
  const navigate = useNavigate();

  return (
    <Layout>
      <Paper sx={{ padding: '1.2em', borderRadius: '0.5em', minWidth: '380px' }}>
        <Typography sx={{ mt: 1, mb: 1, textAlign: 'center' }} variant='h4'>
          {t('resetPassword')}
        </Typography>
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
          <TextFieldForm errors={errors} register={register} />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button
              fullWidth
              variant='outlined'
              sx={{ mt: 1.5 }}
              color='error'
              onClick={() => navigate('/signIn')}
            >
              {t('calcel')}
            </Button>
            <Button fullWidth variant='contained' sx={{ mt: 1.5 }} type='submit'>
              {t('reset')}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Layout>
  );
}

export default PasswordReset;
