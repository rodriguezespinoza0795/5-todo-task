import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SignInFormValues } from './SignIn.types';
import { getItem, setItem } from '~/utils';
import { useNotification, useAuth } from '~/context';

export const useSignIn = () => {
  const navigate = useNavigate();
  const notification = useNotification();
  const auth = useAuth();
  const { t } = useTranslation('common');

  const onSubmit = (data: SignInFormValues) => {
    const isValid = validate(data);
    if (isValid) {
      setItem('JWTtoken', data);
      auth?.login();
      navigate('/');
    }
  };

  const validate = (data: SignInFormValues) => {
    const users: SignInFormValues[] = getItem('users') || [
      { email: 'example@example.com', password: '12345678' },
    ];
    const isValid = users.find(
      ({ email, password }) => email === data.email && password === data.password,
    );

    if (isValid) return true;

    notification?.getError(t('wrongEmailPassword'));
    return false;
  };

  return { onSubmit };
};
