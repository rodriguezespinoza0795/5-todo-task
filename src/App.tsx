import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { AppRouter } from './Router';
import { AuthProvider } from '~/context';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Cargando...'}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
