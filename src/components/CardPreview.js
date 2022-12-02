import '../styles/components/CardPreview.scss';
import {
    FaGithubAlt,
    FaTrashAlt,
    FaMobileAlt,
    FaLinkedin,
    FaEnvelopeOpenText,
} from 'react-icons/fa';
import iconLogo from '../images/icono-logo.png';
import Logotransparente from '../images/logo-transparente.png';
import {NavLink} from "react-router-dom";

const CardPreview = (props) => {
    return (<section className="card-section ">
        <div className="reset">
            <button
                type="reset"
                className="reset__button "
                title="Reset button"
                onClick={props.handleReset}
            >
                <FaTrashAlt className="icon-trash"></FaTrashAlt>
                Reset

            </button>
        </div>
        <article className={`card ${props.selectedPalette}`}>
            <div className="js-card-border card__text ">
                <h3 className="js-card-name card__text_title">{(props.person.name === '') ? 'Nombre Apellidos' : props.person.name}</h3>
                <p className="card__text_subtitle">{(props.person.job === '') ? 'Front-end developer' : props.person.job}</p>
            </div>
            <div
                className="card__image "
                title="Preview image"
                alt="Preview image"
            ></div>
            <ul className="card__social">
                <li>
                    <a href={`tel:${props.person.phone}`} target="_blank" rel="noreferrer" title="Telephone" alt="Telephone">
                        <FaMobileAlt className="js-card-icon icon-movil fa-brands"></FaMobileAlt>
                    </a>
                </li>
                <li>
                    <a href={`mailto:${props.person.email}`} target="_blank" rel="noreferrer" title="E-mail" alt="E-mail">
                        <FaEnvelopeOpenText className="js-card-icon icon-email fa-brands" ></FaEnvelopeOpenText>
                    </a>
                </li>
                <li>
                    <a href={`https://www.linkedin.com/in/${props.person.linkedin}`} target="_blank" rel="noreferrer" title="LinkedIn" alt="LinkedIn">
                        <FaLinkedin className="js-card-icon icon-linkedin fa-brands" ></FaLinkedin>
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${props.person.github}`} target="_blank" rel="noreferrer" title="Github" alt="Github">
                        <FaGithubAlt className="js-card-icon icon-github fa-brands"></FaGithubAlt>
                    </a>
                </li>
                <li>
                <NavLink to='/' className="button" >
                    <img src={Logotransparente} className="icon-logo" alt='Logo Debuggers'/>
                     </NavLink> 
                </li>
            </ul>
        </article>
    </section>)
}
export default CardPreview;