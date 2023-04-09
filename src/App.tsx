import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { AppRouter } from './Router';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Cargando...'}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
