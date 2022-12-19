import '../styles/components/Form.scss';
import palette1 from '../images/palette-color-1.png';
import palette2 from '../images/palette-color-2.png';
import palette3 from '../images/palette-color-3.png';
import {
    FaRegObjectUngroup,
    FaChevronDown,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

const Design = (props) => {
    const handleToggle = (e) => { //same function in 3 sections of the form
        props.handleToggleForm(e.currentTarget.id);
    }
    return (
        <fieldset className="design">
            <div className="option" onClick={handleToggle} id="design">
                <span className="option__span">
                    <FaRegObjectUngroup></FaRegObjectUngroup>
                    <h3 className="option__title">Diseña</h3>
                </span>
                <FaChevronDown className={props.toggleForm === 'design' ? '' : 'turn-around'}></FaChevronDown>
            </div>

            <div className={`election ${props.toggleForm === 'design' ? '' : 'collapsed'}`}>
                <legend className="election__title">Colores</legend>

                <span className="election__span">
                    <label className="election__option" htmlFor="option">
                        <input
                            className="election__input "
                            type="radio"
                            id="option"
                            value="1"
                            name="palette"
                            checked={props.person.palette === '1'}
                            onChange={props.handleInput}
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
                            checked={props.person.palette === '2'}
                            onChange={props.handleInput}
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
                            checked={props.person.palette === '3'}
                            onChange={props.handleInput}
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
    )
}

Design.propTypes = {
    toggleForm: PropTypes.string.isRequired,
    person: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired,

};

export default Design;