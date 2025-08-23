import { Link } from 'react-router-dom';

import { trackEvent } from '../lib/analytics';

const CollectionNotFound = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Ups… Este lienzo está en blanco.
      </h2>
      <p className="text-gray-600 text-center max-w-md">
        Parece que este enlace no existe o ya no está disponible. Pero tenemos
        cientos de materiales y productos de arte, oficina y hobbies para ti.
      </p>
      <Link
        to="/collections"
        onClick={() =>
          trackEvent({
            action: 'Click Errors Pages Link',
            category: 'Collections',
            label: 'Collections',
          })
        }
      >
        <button className="mt-4 px-6 py-4 bg-[#3880c4] text-white rounded-4xl font-bold cursor-pointer hover:bg-[#2a5f8c] transition-colors">
          Seguir explorando
        </button>
      </Link>
    </div>
  );
};

export default CollectionNotFound;
