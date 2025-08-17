import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';

import Loader from './components/Loader';
import Layout from './components/Layout';

import Collection from './pages/Collection';
import Collections from './pages/Collections';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { useContentful } from './hooks/useContentful';
import type { CollectionTodoArtes } from './types/contentfulTypes';

const App = () => {
  const { data: collections } =
    useContentful<CollectionTodoArtes>('collection');
  // const auth = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth.isLoading) {
  //     return;
  //   }

  //   if (!auth.isAuthenticated) {
  //     auth.signinRedirect();
  //     return;
  //   }

  //   if (
  //     auth.isAuthenticated &&
  //     window.location.search.includes('code=') &&
  //     window.location.search.includes('state=')
  //   ) {
  //     navigate('/');
  //   }
  // }, [auth.isLoading, auth.isAuthenticated, auth, navigate]);

  // if (auth.isLoading) {
  //   return <Loader />;
  // }

  // if (auth.error) {
  //   console.error('auth error', auth.error);
  //   return <div>Encountering error... {auth.error.message}</div>;
  // }

  // if (!auth.isAuthenticated) {
  //   return <Loader />;
  // }

  return (
    <Layout collections={collections}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route
          path="/collections/:collection?"
          element={<Collection collections={collections} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
