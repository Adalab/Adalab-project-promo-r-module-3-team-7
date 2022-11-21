import monigota from '../images/monigota.png';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="header-create">
        <a
          href="http://beta.adalab.es/project-promo-r-module-2-team-9/"
          title="Debuggers Cards"
          alt="Debuggers Cards"
        >
          <img
            className="header-create__img"
            src="./assets/images/icono-logo.png"
            alt="logo awesome"
          />
        </a>
      </header>
      <section className="card-section js-card-section">
        <div className="reset">
          <button
            type="reset"
            className="reset__button js_reset-btn"
            title="Reset button"
          >
            {' '}
            <i className="fa-solid fa-trash-can"></i>Reset
          </button>
        </div>
        <article className="card js-card">
          <div className="card__text js-card-border">
            <h3 className="card__text_title js-card-name js_preview-name">
              Nombre apellido
            </h3>
            <p className="card__text_subtitle js_preview-job">
              Front-end developer
            </p>
          </div>
          <div
            className="card__image js_card_img js__profile-image"
            title="Preview image"
            alt="Preview image"
          ></div>
          <ul className="card__social">
            <li>
              <a
                className="js_preview-tlf"
                href=""
                target="_blank"
                title="Telephone"
                alt="Telephone"
              >
                {' '}
                <i className="fa-solid fa-mobile-screen js-card-icon"></i>
              </a>
            </li>
            <li>
              <a
                className="js_preview-email"
                href=""
                target="_blank"
                title="E-mail"
                alt="E-mail"
              >
                <i className="fa-regular fa-envelope js-card-icon"></i>
              </a>
            </li>
            <li>
              <a
                className="js_preview-lin"
                href=""
                target="_blank"
                title="LinkedIn"
                alt="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in js-card-icon"></i>
              </a>
            </li>
            <li>
              <a
                className="js_preview-git"
                href=""
                target="_blank"
                title="Github"
                alt="Github"
              >
                <i className="fa-brands fa-github-alt js-card-icon"></i>
              </a>
            </li>
            <li>
              <a
                href="http://beta.adalab.es/project-promo-r-module-2-team-9/"
                target="_blank"
                title="Debuggers Cards"
                alt="Debuggers Cards"
              >
                <img src="./assets/images/favicon.png" className="icon-logo" />
              </a>
            </li>
          </ul>
        </article>
      </section>
      <form method="get" action="" className="form">
        {/* {/*<!--aquí va el link en js -->/ */}

        <fieldset className="design">
          <div className="option js_design_bar">
            <span className="option__span">
              <i className="fa-regular fa-object-ungroup"></i>
              <h3 className="option__title">Diseña</h3>
            </span>
            <i className="fa-solid fa-chevron-down js_arrow-design turn-around"></i>
          </div>

          <div className="election js_color-election">
            <legend className="election__title">Colores</legend>

            <span className="election__span">
              <label className="election__option" for="option">
                <input
                  className="election__input js-input-1 js-palette"
                  type="radio"
                  id="option"
                  value="1"
                  name="colors-options"
                  checked
                />
                <img
                  className="election__img"
                  src="./assets/images/palette-color-1.png"
                  alt="Palette-color1"
                />
              </label>

              <label className="election__option" for="option">
                <input
                  className="election__input js-input-2 js-palette"
                  type="radio"
                  id="option"
                  value="2"
                  name="colors-options"
                />
                <img
                  className="election__img"
                  src="./assets/images/palette-color-2.png"
                  alt="Palette-color2"
                />
              </label>

              <label className="election__option" for="option">
                <input
                  className="election__input js-input-3 js-palette"
                  type="radio"
                  id="option"
                  value="3"
                  name="colors-options"
                />
                <img
                  className="election__img"
                  src="./assets/images/palette-color-3.png"
                  alt="Palette-color3"
                />
              </label>
            </span>
          </div>
        </fieldset>

        {/*<!------------------------RELLENA------------------------------------>*/}

        <fieldset className="fieldset_stuffed">
          <div className="option js_stuffed_bar">
            <span className="option__span">
              <i className="fa-regular fa-keyboard"></i>
              <h3 className="option__title">Rellena</h3>
            </span>
            <i className="fa-solid fa-chevron-down js_arrow-stuffed"></i>
          </div>

          <div className="collapsed js_stuffed-data">
            {/*<!-- class = stuffed añadir con JS-->*/}
            <label className="stuffed__label" for="full_name">
              Nombre completo
            </label>
            <input
              className="stuffed__input js_input-name js-input"
              placeholder="Ej: Sally Jill"
              id="firstName"
              type="text"
              name="full_name"
              required
            />

            <label className="stuffed__label" for="job">
              Puesto
            </label>
            <input
              className="stuffed__input js_input-job js-input"
              placeholder="Ej: Front-end unicorn"
              id="job"
              type="text"
              name="job"
              required
            />

            <label className="stuffed__label" for="profileImage">
              Imagen de perfil
            </label>
            <div className="stuffed__image">
              <label for="profileImage" className="add-image">
                Añadir imagen
              </label>
              <input
                type="file"
                className="js_input_img hidden js__profile-upload-btn js-input"
                id="profileImage"
                title="Add image"
              />
              <div className="preview-image stuffed__input js_form_img js__profile-preview"></div>
            </div>

            <label className=" stuffed__label" for="email">
              Email{' '}
            </label>
            <input
              className="stuffed__input js_input-email js-input"
              placeholder="Ej: sally.hill@gmail.com"
              type="email"
              id="emailAddress"
              name="email"
              required
            />

            <label className="stuffed__label" for="phone">
              Teléfono
            </label>
            <input
              className="stuffed__input js_input-tlf js-input"
              placeholder="Ej: 555-55-55-55"
              type="tel"
              id="telephone"
              name="phone"
            />

            <label className="stuffed__label" for="linkedin">
              Linkedin
            </label>
            <input
              className="stuffed__input js_input-lin js-input"
              placeholder="Ej: linkedin.com/in/sally-hill"
              id="linkedin"
              type="text"
              name="linkedin"
              required
            />
            <label className="stuffed__label" for="github">
              Github
            </label>
            <input
              className="stuffed__input js_input-githup js-input"
              placeholder="Ej: sally-hill"
              id="github"
              type="text"
              name="github"
              required
            />
          </div>
        </fieldset>

        {/*<!------------------------COMPARTE------------------------------------>*/}

        <fieldset className="fieldset_share">
          <div className="option js_share_bar">
            <span className="option__span">
              <i className="fa-solid fa-share-nodes"></i>
              <h3 className="option__title">Comparte</h3>
            </span>
            <i className="fa-solid fa-chevron-down js_arrow-share"></i>
          </div>
          <div className="collapsed js_share">
            {/* <!-- class = share añadir con JS--> */}
            <button
              className="share__button js-btn-create"
              name="create-card"
              value="create-card"
            >
              {' '}
              <i className="fa-solid fa-address-card share-icon js-icon-btn"></i>{' '}
              Crear tarjeta{' '}
            </button>
          </div>
          <div className="js_created collapsed">
            {/*<!-- class = created añadir con JS-->*/}
            <h4 className="created__title">La tarjeta ha sido creada:</h4>
            <a href="#" className="created__link js_link" target="_blank">
              Link
            </a>
            <a href="#" className="twitter js_twitter" target="_blank">
              {' '}
              <i className="fa-brands fa-twitter twitter-icon"></i>
              Compartir en twitter
            </a>
          </div>
        </fieldset>
      </form>
      <footer className="footer">
        <small className="footer__small">Debuggers Cards ©2022</small>
        <a href="./index.html">
          <img
            className="footer__logo"
            src="./assets/images/logo-adalab.png"
            alt="Logo Adalab"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
