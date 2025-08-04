import { Link, useParams } from 'react-router-dom';

import { collections } from '../constants/collections';

const Collection = () => {
  const { collection } = useParams<{ collection?: string }>();

  const foundCollection = collections.find((item) => item.value === collection);

  if (!foundCollection) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Ups… Este lienzo está en blanco.
        </h2>
        <p className="text-gray-600 text-center max-w-md">
          Parece que este enlace no existe o ya no está disponible. Pero tenemos
          cientos de materiales y productos de arte, oficina y hobbies para ti.
        </p>
        <Link to="/collections">
          <button className="mt-4 px-6 py-4 bg-[#3880c4] text-white rounded-4xl font-bold cursor-pointer hover:bg-[#2a5f8c] transition-colors">
            Seguir explorando
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      <h3 className="text-6xl font-bold capitalize">{foundCollection.text}</h3>
      <p className="text-lg text-gray-700">{foundCollection.description}</p>
    </div>
  );
};

export default Collection;
