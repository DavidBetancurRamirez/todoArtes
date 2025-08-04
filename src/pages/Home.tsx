import React from 'react';

import Accordion from '../components/Accordion';

import { stores } from '../utils/stores';

const Home = () => {
  return (
    <React.Fragment>
      <img
        src="https://todoenartes.com/cdn/shop/files/BANNER_2.jpg?v=1753308766&width=1650"
        alt="Banner"
        className="mx-auto"
      />

      <div className="mt-6 flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-bold">Arma tu kit escolar a la medida</h2>
        <p>
          Reunimos en un solo lugar los productos más útiles, confiables y
          pedidos.
          <br />
          Solo entra, revisa y ajusta lo que necesites.
        </p>
      </div>

      <div className="flex justify-around gap-8 mx-8 my-6">
        <div className="h-auto transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            src="https://todoenartes.com/cdn/shop/collections/Kit_Escolar_Recomendado_Primaria.png?v=1753396442&width=900"
            alt="Kit Escolar Recomendado Primaria"
          />
          <p className="text-lg">
            Kit recomendado para estudiantes de primaria.
          </p>
        </div>

        <div className="h-auto transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
          <img
            src="https://todoenartes.com/cdn/shop/collections/Kit_Escolar_Recomendado_Secundaria.png?v=1753396468&width=900"
            alt="Kit Escolar Recomendado Secundaria"
          />
          <p className="text-lg">
            Kit recomendado para estudiantes de secundaria.
          </p>
        </div>
      </div>

      <div className="bg-[#3880c4] text-center text-white py-8 space-y-4">
        <h3 className="font-bold uppercase">Siempre cerca de ti</h3>
        <h2 className="text-6xl font-bold uppercase">Tiendas</h2>

        <div className="w-[80%] mx-auto">
          {stores.map((store, index) => (
            <Accordion
              key={index}
              borderButton={index === stores.length - 1}
              {...store}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
