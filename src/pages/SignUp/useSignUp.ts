import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SignUpFormValues } from './SignUp.types';
import { useNotification } from '~/context';

export const useSignUp = () => {
  const navigate = useNavigate();
  const notification = useNotification();
  const { t } = useTranslation('common');

  const onSubmit = (data: SignUpFormValues) => {
    const isValid = validate(data);
    if (isValid) {
      console.log('data', data);
      navigate('/signIn');
    }
  };

  const validate = (data: SignUpFormValues) => {
    const users: SignUpFormValues[] = [
      { email: 'example@example.com', password: '12345678', username: 'example' },
    ];
    const isValidEmail = users.find(({ email }) => email === data.email);
    const isValidUserName = users.find(({ username }) => username === data.username);

    if (isValidEmail) {
      notification?.getError(t('emailRegistered'));
      return false;
    }

    if (isValidUserName) {
      notification?.getError(t('usernameRegistered'));
      return false;
    }

    return true;
  };

  return { onSubmit };
};
