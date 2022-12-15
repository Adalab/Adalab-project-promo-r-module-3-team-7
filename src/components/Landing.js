import Logo from "../images/logo-adalab.png";
import '../styles/components/Landing.scss';
import '../styles/components/Header.scss';
import iconLogo from '../images/icono-logo.png';

import {NavLink} from "react-router-dom";

import {
  FaRegObjectUngroup,
  FaKeyboard,
  FaShareAlt,
} from 'react-icons/fa';

const Landing = () => {
  return (
    <>
    <main className="main">
      <header className="header">
        <img
          className="header__img"
          src={iconLogo}
          alt="logo awesome"
        />
      </header>
      <section className="section-1">
        <h1 className="section-1__title">Crea tu tarjeta de visita</h1>
        <p className="section-1__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </section>
      <section className="section-2">
        <article className="section-2__option">
          <FaRegObjectUngroup className='landing-icon'/>
          <p className="section-2__text">Diseña</p>
        </article>
        <article className="section-2__option">
        <FaKeyboard className='landing-icon'/>
          <p className="section-2__text">Rellena</p>
        </article>
        <article className="section-2__option">
        <FaShareAlt className='landing-icon'/>
          <p className="section-2__text">Comparte</p>
        </article>
      </section>
      <NavLink to='/Create' className="button" > Comenzar</NavLink>
    </main>
</>
  );
};

export default Landing;
