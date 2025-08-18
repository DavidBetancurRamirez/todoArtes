import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from './Loader';

interface AuthProps {
  children: React.ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
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

    if (
      auth.isAuthenticated &&
      window.location.search.includes('code=') &&
      window.location.search.includes('state=')
    ) {
      navigate('/');
    }
  }, [auth.isLoading, auth.isAuthenticated, auth, navigate]);

  if (auth.isLoading) {
    return <Loader />;
  }

  if (auth.error) {
    console.error('auth error', auth.error);
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default Auth;
