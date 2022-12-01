import '../styles/App.scss';
import ls from '../service/LocalStorage.js'
import dataApi from '../service/Api';
import { useState } from 'react';
import logo from '../images/logo-adalab.png';
import iconLogo from '../images/icono-logo.png';
import palette1 from '../images/palette-color-1.png';
import palette2 from '../images/palette-color-2.png';
import palette3 from '../images/palette-color-3.png';
import {
  FaGithubAlt,
  FaTrashAlt,
  FaMobileAlt,
  FaLinkedin,
  FaEnvelopeOpenText,
  FaKeyboard,
  FaShareAlt,
  FaChevronDown,
  FaRegObjectUngroup,
  FaTwitter,
  FaIdCard,
} from 'react-icons/fa';

function App() {
//TODO: add twitter link to the ls
  const handleForm = (e) => {
    e.preventDefault();
  }
  // const [dataCard, setDataCard] = useState({});
  const [toggleCreateCard, setToggleCreateCard] = useState('');

  const [toggleForm, setToggleForm] = useState('design');

  const [dataResult, setDataResult] = useState({});

  const [person, setPerson] = useState(ls.get('fullObject', {
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    photo: 'http://placekitten.com/200/300',
  }));

  const handleCreateCard = (e) => {
    setToggleCreateCard(e.currentTarget.id);
    toggleCreateCard ? setToggleCreateCard('') : setToggleCreateCard('collapsed');
  }

  const handleToggleForm = (e) => {
    setToggleForm(e.currentTarget.id);
  };

  const handleClick = (e) => {
     e.preventDefault();

    dataApi(person).then((data) => 
      setDataResult(data));

  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setPerson({ ...person, [inputName]: inputValue });
    console.log(inputName);
    console.log(inputValue);
    ls.set('fullObject', person);
    // const classApp = (name === 'MariCarmen') ? 'palette1' : '';
  };

  let selectedPalette = 'palette1';
  if (person.palette === '2') {
    selectedPalette = 'palette2';
  } else if (person.palette === '3') {
    selectedPalette = 'palette3';
  } else {
    selectedPalette = 'palette1';
  }

  const handleReset = () => {
    setPerson({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      photo: '',
    });
    ls.clear();
  };
  return (
    <>
      <header className="header-create">
        {/* TODO: future link to preview-page */}
        {/* <a
          href="http://beta.adalab.es/project-promo-r-module-2-team-9/"
          title="Debuggers Cards"
          alt="Debuggers Cards"
        > */}
        <img className="header-create__img" src={iconLogo} alt="logo awesome" />
        {/* </a> */}
      </header>
      <main className={`main-create ${selectedPalette}`}>
        <section className="card-section ">
          <div className="reset">
            <button
              type="reset"
              className="reset__button "
              title="Reset button"
              onClick={handleReset}
            >
              <FaTrashAlt className="icon-trash"></FaTrashAlt>
              Reset

            </button>
          </div>
          <article className={`card ${selectedPalette}`}>
            <div className="js-card-border card__text ">
              <h3 className="js-card-name card__text_title">{(person.name === '') ? 'Nombre Apellidos' : person.name}</h3>
              <p className="card__text_subtitle">{(person.job === '') ? 'Front-end developer' : person.job}</p>
            </div>
            <div
              className="card__image "
              title="Preview image"
              alt="Preview image"
            ></div>
            <ul className="card__social">
              <li>
                <a href={`tel:${person.phone}`} target="_blank" rel="noreferrer" title="Telephone" alt="Telephone">
                  <FaMobileAlt className="js-card-icon icon-movil fa-brands"></FaMobileAlt>
                </a>
              </li>
              <li>
                <a href={`mailto:${person.email}`} target="_blank" rel="noreferrer" title="E-mail" alt="E-mail">
                  <FaEnvelopeOpenText className="js-card-icon icon-email fa-brands" ></FaEnvelopeOpenText>
                </a>
              </li>
              <li>
                <a href={`https://www.linkedin.com/in/${person.linkedin}`} target="_blank" rel="noreferrer" title="LinkedIn" alt="LinkedIn">
                  <FaLinkedin className="js-card-icon icon-linkedin fa-brands" ></FaLinkedin>
                </a>
              </li>
              <li>
                <a href={`https://github.com/${person.github}`} target="_blank" rel="noreferrer" title="Github" alt="Github">
                  <FaGithubAlt className="js-card-icon icon-github fa-brands"></FaGithubAlt>
                </a>
              </li>
              <li>
                {/* <a
                  href="http://beta.adalab.es/project-promo-r-module-2-team-9/"
                  target="_blank" rel="noreferrer"
                  title="Debuggers Cards"
                  alt="Debuggers Cards"
                > */}
                <img src={iconLogo} className="icon-logo" />
                {/* </a> */}
              </li>
            </ul>
          </article>
        </section>
        <form method="get" action="" className="form" onSubmit={handleForm}>
          {/* {/*<!--aquí va el link en js -->/ */}

          <fieldset className="design">
            <div className="option" onClick={handleToggleForm} id="design">
              <span className="option__span">
                <FaRegObjectUngroup></FaRegObjectUngroup>
                <h3 className="option__title">Diseña</h3>
              </span>
              <FaChevronDown className={toggleForm === 'design' ? '' : 'turn-around'}></FaChevronDown>
            </div>

            <div className={`election ${toggleForm === 'design' ? '' : 'collapsed'}`}>
              <legend className="election__title">Colores</legend>

              <span className="election__span">
                <label className="election__option" htmlFor="option">
                  <input
                    className="election__input "
                    type="radio"
                    id="option"
                    value="1"
                    name="palette"
                    checked={person.palette === '1'}
                    onChange={handleInput}
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
                    name="palette"
                    checked={person.palette === '2'}
                    onChange={handleInput}
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
                    name="palette"
                    checked={person.palette === '3'}
                    onChange={handleInput}
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
            <div className="option" onClick={handleToggleForm} id="fill">
              <span className="option__span">
                <FaKeyboard></FaKeyboard>
                <h3 className="option__title">Rellena</h3>
              </span>
              <FaChevronDown className={toggleForm === 'fill' ? '' : 'turn-around'}></FaChevronDown>
            </div>

            <div className={`stuffed ${toggleForm === 'fill' ? '' : 'collapsed'}`}>
              {/*<!-- class = stuffed añadir con JS-->
              COLLAPSED*/}
              <label className="stuffed__label" htmlFor="name">
                Nombre completo
              </label>
              <input
                value={person.name}
                className="stuffed__input"
                placeholder="Ej: Sally Jill"
                onInput={handleInput}
                id="firstName"
                type="text"
                name="name"
                required
              />

              <label className="stuffed__label" htmlFor="job">
                Puesto
              </label>
              <input
                value={person.job}
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
                {/* <input
                  value = {person.photo}
                  onInput={handleInput}
                  type="file"
                  id="profileImage"
                  title="Add image"
                  name="photo"
                /> */}
                <div className="preview-image stuffed__input"></div>
              </div>

              <label className=" stuffed__label" htmlFor="email">
                Email{' '}
              </label>
              <input
                value={person.email}
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
                value={person.phone}
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
                value={person.linkedin}
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
                value={person.github}
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
            <div className="option" onClick={handleToggleForm} id="share">
              <span className="option__span">
                <FaShareAlt></FaShareAlt>
                <h3 className="option__title">Comparte</h3>
              </span>
              <FaChevronDown className={toggleForm === 'share' ? '' : 'turn-around'}></FaChevronDown>
            </div>
            <div className={`share ${toggleForm === 'share' ? '' : 'collapsed'}`}>
              {/* <!-- class = share añadir con JS--> 
              COLLAPSED*/}
              <button
                className="share__button"
                name="create-card"
                value="create-card"
                onClick={handleClick}
              >
                {' '}
                <FaIdCard></FaIdCard> Crear
                tarjeta{' '}
              </button>
            </div>
            <div className={`created ${toggleCreateCard} ||created`} onClick={handleCreateCard} id='createCard'> TODO: revisar esto


              <h4 className="created__title">La tarjeta ha sido creada:</h4>
                {dataResult.success ? <a href={dataResult.cardURL} className="created__link" target="_blank" rel="noreferrer">Aquí tienes tu link: {dataResult.cardURL} </a>: `Por cada campo vacío, un gatito llora`}
              <a href={`https://twitter.com/intent/tweet?text=Nueva%20tarjeta%20creada%20${dataResult.cardURL}`} className="twitter" target="_blank" rel="noreferrer">
                <FaTwitter></FaTwitter>
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
            className="footer__logo"
            src={logo}
            alt="Logo Adalab"
          />
        </a>
      </footer>
    </>
  );
}

export default App;
