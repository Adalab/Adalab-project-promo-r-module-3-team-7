import '../styles/App.scss';
import ls from '../service/LocalStorage.js'
import dataApi from '../service/Api';
import { useState } from 'react';

import iconLogo from '../images/icono-logo.png';
import palette1 from '../images/palette-color-1.png';
import palette2 from '../images/palette-color-2.png';
import palette3 from '../images/palette-color-3.png';
import {
  FaKeyboard,
  FaShareAlt,
  FaChevronDown,
  FaRegObjectUngroup,
  FaTwitter,
  FaIdCard,
} from 'react-icons/fa';
import Header from './Header';
import Footer from "./Footer";
import CardPreview from './CardPreview';
function App() {
  //TODO: add twitter link to the ls
  //TODO: tenemos un error de id repetido
  const handleForm = (e) => {
    e.preventDefault();
  }
  // const [dataCard, setDataCard] = useState({});
  const [toggleCard, setToggleCard] = useState(false);

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

  // const handleCreateCard = (e) => {


  // }

  const renderShareCode = () => {
    if (toggleCard === true) {
      return (
        <>
          <div className="created">
            <h4 className="created__title">La tarjeta ha sido creada:</h4>
            {dataResult.success ? <a href={dataResult.cardURL} className="created__link" target="_blank" rel="noreferrer">Aquí tienes tu link: {dataResult.cardURL} </a> : `Por cada campo vacío, un gatito llora`}
            <a href="#" className="twitter" target="_blank" rel="noreferrer">
              <FaTwitter></FaTwitter>
              Compartir en twitter
            </a>
          </div>
        </>
      );
    }
  }


  const handleToggleForm = (e) => {
    setToggleForm(e.currentTarget.id);
  };

  const handleClick = (e) => {
    e.preventDefault();

    console.log('mehanclickao');
    setToggleCard(!toggleCard);

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
      <Header />
      <main className={`main-create ${selectedPalette}`}>
        <CardPreview
          handleReset={handleReset}
          selectedPalette={selectedPalette}
          person={person}
        ></CardPreview>
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
            {renderShareCode()}
          </fieldset>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
