import { useParams } from 'react-router-dom';

import CollectionNotFound from '../components/CollectionNotFound';

import type { CollectionTodoArtes } from '../types/contentfulTypes';

interface CollectionProps {
  collections: CollectionTodoArtes['fields'][];
}

const Collection: React.FC<CollectionProps> = ({ collections }) => {
  const { collection } = useParams<{ collection?: string }>();

  const foundCollection = collections.find((item) => item.value === collection);
  if (!foundCollection) {
    return <CollectionNotFound />;
  }

  return (
    <div className="p-8 flex space-x-8">
      <div className="w-4/5 space-y-8">
        <h3 className="text-6xl font-bold capitalize">
          {foundCollection.label}
        </h3>
        <p className="text-lg text-gray-700">{foundCollection.description}</p>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <img
          src={foundCollection?.image?.fields?.file?.url}
          alt={foundCollection.label}
          className="max-w-full max-h-[350px] object-contain rounded-xl shadow"
        />
      </div>
    </div>
  );
};

export default Collection;
