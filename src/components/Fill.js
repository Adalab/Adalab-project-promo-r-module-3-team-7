import '../styles/components/Form.scss';
import {
    FaKeyboard,
    FaChevronDown,
  } from 'react-icons/fa';

const Fill =(props)=>{
    const handleToggle = (e) => {
        props.handleToggleForm(e.currentTarget.id);
    }
    return (
        <fieldset className="fieldset_stuffed">
          <div className="option" onClick={handleToggle} id="fill">
            <span className="option__span">
              <FaKeyboard></FaKeyboard>
              <h3 className="option__title">Rellena</h3>
            </span>
            <FaChevronDown className={props.toggleForm === 'fill' ? '' : 'turn-around'}></FaChevronDown>
          </div>

          <div className={`stuffed ${props.toggleForm === 'fill' ? '' : 'collapsed'}`}>
           
            <label className="stuffed__label" htmlFor="name">
              Nombre completo
            </label>
            <input
              value={props.person.name}
              className="stuffed__input"
              placeholder="Ej: Sally Jill"
              onInput={props.handleInput}
              id="firstName"
              type="text"
              name="name"
              required
            />

            <label className="stuffed__label" htmlFor="job">
              Puesto
            </label>
            <input
              value={props.person.job}
              className="stuffed__input"
              placeholder="Ej: Front-end unicorn"
              onInput={props.handleInput}
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
              value={props.person.email}
              className="stuffed__input"
              placeholder="Ej: sally.hill@gmail.com"
              onInput={props.handleInput}
              type="email"
              id="emailAddress"
              name="email"
              required
            />

            <label className="stuffed__label" htmlFor="phone">
              Teléfono
            </label>
            <input
              value={props.person.phone}
              className="stuffed__input"
              placeholder="Ej: 555-55-55-55"
              type="tel"
              id="telephone"
              onInput={props.handleInput}
              name="phone"
            />

            <label className="stuffed__label" htmlFor="linkedin">
              Linkedin
            </label>
            <input
              value={props.person.linkedin}
              className="stuffed__input"
              placeholder="Ej: linkedin.com/in/sally-hill"
              onInput={props.handleInput}
              id="linkedin"
              type="text"
              name="linkedin"
              required
            />
            <label className="stuffed__label" htmlFor="github">
              Github
            </label>
            <input
              value={props.person.github}
              className="stuffed__input"
              placeholder="Ej: sally-hill"
              onInput={props.handleInput}
              id="github"
              type="text"
              name="github"
              required
            />
          </div>
        </fieldset>)
}
export default Fill;