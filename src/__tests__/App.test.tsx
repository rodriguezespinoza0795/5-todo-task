import { render } from '@testing-library/react';
import App from '~/App';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    };
  },
}));

describe('<App />', () => {
  test('Renders the App component', () => {
    render(<App />);
  });
});
