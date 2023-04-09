import { Route, Routes } from 'react-router-dom';
import { TodoTask, SignIn, SignUp } from './pages';
import { getItem } from '~/utils';

export const AppRouter = () => {
  const registered = getItem('usarData');
  return (
    <Routes>
      {registered ? (
        <>
          <Route path='/' element={<TodoTask />} />
          <Route path='*' element={<TodoTask />} />
        </>
      ) : (
        <>
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='*' element={<SignIn />} />
        </>
      )}
    </Routes>
  );
};
