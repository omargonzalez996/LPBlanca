import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Pricing = () => {
  const { contacto } = config;
  const { title } = contacto;

  return (
    <section className={`bg-background py-8`} id="contacto">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
          <div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.66992450670574!2d-100.8814803407024!3d20.219725421168526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc4851bd1d165%3A0x15f539d5d89d610d!2sSanatorio%20%22Sagrado%20Coraz%C3%B3n%22!5e0!3m2!1ses-419!2smx!4v1679610805590!5m2!1ses-419!2smx"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </h1>
      </div>
      <div
        className={`container mx-auto px-2 pt-4 pb-12 text-center text-black`}
      >
        <p className={`text-2xl text-border font-bold leading-none mb-3`}>
          Sanatorio Sagrado Corazon, Benito Juarez #718, Colonia Centro,
          Salvatierra, Gto. C.P. 38900
        </p>
      </div>
      <Divider />
      <div>
        <div
          className={`flex justify-center items-center gap-x-3 h-16`}
        >
          <svg
            className="fill-current text-border"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#FFAEBC"
            viewBox="0 0 512 512"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
          </svg>
          <a href="https://wa.me/524425927437">
            <p className={`text-xl text-border font-bold leading-none mb-3`}>
              442 592 7437
            </p>
          </a>
        </div>
        <div className={`flex justify-center items-center gap-x-3 h-16`}>
          <svg
            className="fill-current text-border"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#FFAEBC"
            viewBox="0 0 512 512"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
          </svg>
          <a href="https://wa.me/524661073049">
            <p className={`text-xl text-border font-bold leading-none mb-3`}>
              466 107 3049
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
