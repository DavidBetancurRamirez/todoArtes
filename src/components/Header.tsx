import { Handbag, Search, UserRound } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import type { CollectionTodoArtes } from '../types/contentfulTypes';

interface HeaderProps {
  collections: CollectionTodoArtes['fields'][];
}

const Header: React.FC<HeaderProps> = ({ collections }) => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-white">
      <Link to="/" className="flex items-center">
        <img
          src="https://todoenartes.com/cdn/shop/files/LOGO_TEA.png?height=48&v=1748131301"
          alt="Logo"
          className="h-12 w-44"
        />
      </Link>

      <div className="flex space-x-4 group">
        {collections.map((collection, index) => {
          const isActive =
            location.pathname === `/collections/${collection.value}`;

          return (
            <Link
              key={index}
              to={`/collections/${collection.value}`}
              className={`text-black font-semibold transition-colors ${
                isActive
                  ? 'underline'
                  : 'group-hover:text-gray-600 hover:!text-black'
              }`}
            >
              {collection.label}
            </Link>
          );
        })}
      </div>

      <div className="flex space-x-4">
        <span className="cursor-pointer">
          <Search size={18} />
        </span>
        <Link to={`/profile`}>
          <UserRound size={18} />
        </Link>
        <span className="cursor-pointer">
          <Handbag size={18} />
        </span>
      </div>
    </nav>
  );
};

export default Header;
