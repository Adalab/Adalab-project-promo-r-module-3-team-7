import { useState } from 'react';
import logo from '../images/logo-adalab.png';
import iconLogo from '../images/icono-logo.png';
import logoAdalab from '../images/logo-adalab.png';
import palette1 from '../images/palette-color-1.png';
import palette2 from '../images/palette-color-2.png';
import palette3 from '../images/palette-color-3.png';
import {
  FaGithubAlt,
  FaTrashAlt,
  FaMobileAlt,
  FaLinkedin,
  FaEnvelopeOpenText,
} from 'react-icons/fa';

import '../styles/App.scss';

function App() {
  const [person, setPerson] = useState({
    palette: '',
    full_name: '',
    job: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    images: '',
  });
  const handleInput = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setPerson({ ...person, [inputName]: inputValue });
    console.log(inputName);
    console.log(inputValue);
  };
  return (
    <>
      <header className="header-create">
        <a
          href="http://beta.adalab.es/project-promo-r-module-2-team-9/"
          title="Debuggers Cards"
          alt="Debuggers Cards"
        >
          <img className="header-create__img" src={logo} alt="logo awesome" />
        </a>
      </header>
      <main className="main-create">
        <section className="card-section ">
          <div className="reset">
            <button
              type="reset"
              className="reset__button "
              title="Reset button"
            >
              <FaTrashAlt></FaTrashAlt>
              Reset
            </button>
          </div>
          <article className="card ">
            <div className="card__text ">
              <h3 className="card__text_title">Nombre apellido</h3>
              <p className="card__text_subtitle">Front-end developer</p>
            </div>
            <div
              className="card__image "
              title="Preview image"
              alt="Preview image"
            ></div>
            <ul className="card__social">
              <li>
                <a href="#" target="_blank" title="Telephone" alt="Telephone">
                  <FaMobileAlt className="icon"></FaMobileAlt>
                </a>
              </li>
              <li>
                <a href="" target="_blank" title="E-mail" alt="E-mail">
                  <FaEnvelopeOpenText></FaEnvelopeOpenText>
                </a>
              </li>
              <li>
                <a href="" target="_blank" title="LinkedIn" alt="LinkedIn">
                  <FaLinkedin></FaLinkedin>
                </a>
              </li>
              <li>
                <a href="" target="_blank" title="Github" alt="Github">
                  <FaGithubAlt></FaGithubAlt>
                </a>
              </li>
              <li>
                <a
                  href="http://beta.adalab.es/project-promo-r-module-2-team-9/"
                  target="_blank"
                  title="Debuggers Cards"
                  alt="Debuggers Cards"
                >
                  <img src={iconLogo} className="icon-logo" />
                </a>
              </li>
            </ul>
          </article>
        </section>
        <form method="get" action="" className="form">
          {/* {/*<!--aquí va el link en js -->/ */}

          <fieldset className="design">
            <div className="option ">
              <span className="option__span">
                <i className="fa-regular fa-object-ungroup"></i>
                <h3 className="option__title">Diseña</h3>
              </span>
              <i className="fa-solid fa-chevron-down  turn-around"></i>
            </div>

            <div className="election ">
              <legend className="election__title">Colores</legend>

              <span className="election__span">
                <label className="election__option" htmlFor="option">
                  <input
                    className="election__input "
                    type="radio"
                    id="option"
                    value="1"
                    name="colors-options"
                    checked
                  />
                  <img
                    className="election__img"
                    src={palette1}
                    alt="Palette-color1"
                  />
                </label>

                <label className="election__option" htmlFor="option">
                  <input
                    className="election__input "
                    type="radio"
                    id="option"
                    value="2"
                    name="colors-options"
                  />
                  <img
                    className="election__img"
                    src={palette2}
                    alt="Palette-color2"
                  />
                </label>

                <label className="election__option" htmlFor="option">
                  <input
                    className="election__input "
                    type="radio"
                    id="option"
                    value="3"
                    name="colors-options"
                  />
                  <img
                    className="election__img"
                    src={palette3}
                    alt="Palette-color3"
                  />
                </label>
              </span>
            </div>
          </fieldset>

          {/*<!------------------------RELLENA------------------------------------>*/}

          <fieldset className="fieldset_stuffed">
            <div className="option">
              <span className="option__span">
                <i className="fa-regular fa-keyboard"></i>
                <h3 className="option__title">Rellena</h3>
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div>
              {/*<!-- class = stuffed añadir con JS-->
              COLLAPSED*/}
              <label className="stuffed__label" htmlFor="full_name">
                Nombre completo
              </label>
              <input
                className="stuffed__input"
                placeholder="Ej: Sally Jill"
                onInput={handleInput}
                id="firstName"
                type="text"
                name="full_name"
                required
              />

              <label className="stuffed__label" htmlFor="job">
                Puesto
              </label>
              <input
                className="stuffed__input"
                placeholder="Ej: Front-end unicorn"
                onInput={handleInput}
                id="job"
                type="text"
                name="job"
                required
              />

              <label className="stuffed__label" htmlFor="profileImage">
                Imagen de perfil
              </label>
              <div className="stuffed__image">
                <label htmlFor="profileImage" className="add-image">
                  Añadir imagen
                </label>
                <input
                  onInput={handleInput}
                  type="file"
                  id="profileImage"
                  title="Add image"
                  name="images"
                />
                <div className="preview-image stuffed__input"></div>
              </div>

              <label className=" stuffed__label" htmlFor="email">
                Email{' '}
              </label>
              <input
                className="stuffed__input"
                placeholder="Ej: sally.hill@gmail.com"
                onInput={handleInput}
                type="email"
                id="emailAddress"
                name="email"
                required
              />

              <label className="stuffed__label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="stuffed__input"
                placeholder="Ej: 555-55-55-55"
                type="tel"
                id="telephone"
                onInput={handleInput}
                name="phone"
              />

              <label className="stuffed__label" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                className="stuffed__input"
                placeholder="Ej: linkedin.com/in/sally-hill"
                onInput={handleInput}
                id="linkedin"
                type="text"
                name="linkedin"
                required
              />
              <label className="stuffed__label" htmlFor="github">
                Github
              </label>
              <input
                className="stuffed__input"
                placeholder="Ej: sally-hill"
                onInput={handleInput}
                id="github"
                type="text"
                name="github"
                required
              />
            </div>
          </fieldset>

          {/*<!------------------------COMPARTE------------------------------------>*/}

          <fieldset className="fieldset_share">
            <div className="option">
              <span className="option__span">
                <i className="fa-solid fa-share-nodes"></i>
                <h3 className="option__title">Comparte</h3>
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div>
              {/* <!-- class = share añadir con JS--> 
              COLLAPSED*/}
              <button
                className="share__button"
                name="create-card"
                value="create-card"
              >
                {' '}
                <i className="fa-solid fa-address-card share-icon"></i> Crear
                tarjeta{' '}
              </button>
            </div>
            <div>
              {/*<!-- class = created añadir con JS-->
              COLLAPSED*/}
              <h4 className="created__title">La tarjeta ha sido creada:</h4>
              <a href="#" className="created__link" target="_blank">
                Link
              </a>
              <a href="#" className="twitter" target="_blank">
                {' '}
                <i className="fa-brands fa-twitter twitter-icon"></i>
                Compartir en twitter
              </a>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className="footer">
        <small className="footer__small">Debuggers Cards ©2022</small>
        <a href="./index.html">
          <img
            className={logoAdalab}
            src="./assets/images/logo-adalab.png"
            alt="Logo Adalab"
          />
        </a>
      </footer>
    </>
  );
}

export default App;
