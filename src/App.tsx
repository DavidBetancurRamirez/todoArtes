import { useAuth } from 'react-oidc-context';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import { useEffect } from 'react';

const App = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      auth.signinRedirect();
    }

    if (!auth.isLoading && auth.isAuthenticated) {
      navigate('/');
    }
  }, [auth.isLoading, auth.isAuthenticated, auth, navigate]);

  if (auth.isLoading) {
    return <div>Cargando autenticación...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    // Mientras redirige, puedes mostrar algo opcional
    return <div>Redirigiendo al login...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
