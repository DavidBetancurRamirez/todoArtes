import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';

import Loader from './components/Loader';

import Home from './pages/Home';
import NotFound from './pages/notFound';

const App = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoading) {
      return;
    }

    if (!auth.isAuthenticated) {
      auth.signinRedirect();
      return;
    }

    if (auth.isAuthenticated && window.location.search.includes('code=')) {
      navigate('/');
    }
  }, [auth.isLoading, auth.isAuthenticated, auth, navigate]);

  if (auth.isLoading) {
    return <Loader />;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
