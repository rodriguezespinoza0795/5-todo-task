import { Route, Routes } from 'react-router-dom';
import { TodoTask, SignIn, SignUp, PasswordReset, Admin } from './pages';
import { useAuth } from '~/context';
export const AppRouter = () => {
  const auth = useAuth();
  return (
    <Routes>
      {auth?.isLogged ? (
        <>
          <Route path='/' element={<TodoTask />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Admin/:id' element={<Admin />} />
          <Route path='*' element={<TodoTask />} />
        </>
      ) : (
        <>
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Reset' element={<PasswordReset />} />
          <Route path='*' element={<SignIn />} />
        </>
      )}
    </Routes>
  );
};
