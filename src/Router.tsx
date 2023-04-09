import { Route, Routes } from 'react-router-dom';
import { TodoTask, SignIn, SignUp } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<TodoTask />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  );
};
