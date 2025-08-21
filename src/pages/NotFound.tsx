import { Flag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { trackEvent } from '../lib/analytics';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    trackEvent({
      action: 'Click Errors Pages Link',
      category: 'Not Found',
      label: 'Home',
    });
  };

  return (
    <div className="flex flex-col items-center text-center justify-center mt-20 text-text dark:text-dk_text">
      <Flag size="50" />
      <h3 className="mt-8 !text-3xl !leading-snug md:!text-4xl">
        Error 404 <br /> Parece que algo salió mal.
      </h3>
      <p className="mt-8 mb-10 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
        Parece que estas en una pestaña que no existe, verifica la URL o vuelve
        a la página de inicio.
      </p>
      <button
        className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-500/80 transition"
        onClick={handleClick}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;
