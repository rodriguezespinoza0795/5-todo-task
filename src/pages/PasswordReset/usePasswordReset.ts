import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PasswordResetFormValues } from './PasswordReset.types';
import { useNotification } from '~/context';

export const usePasswordReset = () => {
  const navigate = useNavigate();
  const notification = useNotification();
  const { t } = useTranslation('common');

  const onSubmit = (data: PasswordResetFormValues) => {
    const isValid = validate(data);
    if (isValid) {
      notification?.getSuccess(t('recoveryEmailSent'));
      navigate('/SignIn');
    }
  };

  const validate = (data: PasswordResetFormValues) => {
    const user = [{ email: 'example@example.com' }];
    const isValid = user.find(({ email }) => email === data.email);

    if (isValid) return true;

    notification?.getError(t('emailNoRegistered'));
    return false;
  };
  return { onSubmit };
};
