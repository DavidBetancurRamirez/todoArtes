import { Link } from 'react-router-dom';

import { menuItems } from '../constants/menuItems';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col md:flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#1c476d] p-6 md:justify-between">
      <Link to="/">
        <h4 className="text-white">Todo Artes</h4>
      </Link>

      <ul className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8">
        {menuItems.map((item) => (
          <li
            className="transition-colors duration-300 ease-in-out text-white"
            key={item.value}
          >
            <Link to={`/collections/${item.value}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
