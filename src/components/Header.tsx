import { Handbag, Search, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import { menuItems } from '../constants/menuItems';

const Header = () => {
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
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={`/collections/${item.value}`}
            className="text-black font-semibold group-hover:text-gray-600 hover:!text-black transition-colors"
          >
            {item.text}
          </Link>
        ))}
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
