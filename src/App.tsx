import { Route, Routes } from 'react-router-dom';

import Auth from './components/Auth';
import Layout from './components/Layout';

import { useContentful } from './hooks/useContentful';

import Collection from './pages/Collection';
import Collections from './pages/Collections';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

import type { CollectionTodoArtes } from './types/contentfulTypes';

const App = () => {
  const { data: collections } =
    useContentful<CollectionTodoArtes>('collection');

  return (
    <Auth>
      <Layout collections={collections}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collections"
            element={<Collections collections={collections} />}
          />
          <Route
            path="/collections/:collection?"
            element={<Collection collections={collections} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Auth>
  );
};

export default App;
