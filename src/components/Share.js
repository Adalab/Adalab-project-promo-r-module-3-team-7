<<<<<<< HEAD
import "../styles/components/Form.scss";
import { FaShareAlt, FaChevronDown, FaTwitter, FaIdCard } from "react-icons/fa";
const Share = (props) => {
  const handleToggle = (e) => {
    props.handleToggleForm(e.currentTarget.id);
  };
  const renderShareCode = () => {
    if (props.toggleCard === true) {
      return (
        <>
          <div className="created">
            {props.dataResult.success ? (
              <>
                <h4 className="created__title">La tarjeta ha sido creada:</h4>{" "}
                <a
                  href={props.dataResult.cardURL}
                  className="created__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aquí tienes tu link: {props.dataResult.cardURL}{" "}
                </a>
              </>
            ) : (
              `Por cada campo vacío, un gatito llora`
            )}
            <a
              href={`https://twitter.com/intent/tweet?text=Nueva%20tarjeta%20creada%20${props.dataResult.cardURL}`}
              className="twitter"
              target="_blank"
              rel="noreferrer"
            >
=======
import '../styles/components/Form.scss';
import {
  FaShareAlt,
  FaChevronDown,
  FaTwitter,
  FaIdCard,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
const Share = (props) => {
  const handleToggle = (e) => {
    props.handleToggleForm(e.currentTarget.id);

  }
  const renderShareCode = () => {

    if (props.toggleCard === true) {

      return (
        <>
          <div className="created">

            {props.dataResult.success ? <><h4 className="created__title">La tarjeta ha sido creada:</h4> <a href={props.dataResult.cardURL} className="created__link" target="_blank" rel="noreferrer">Aquí tienes tu link: {props.dataResult.cardURL} </a></> : `Por cada campo vacío, un gatito llora`}
            <a href={`https://twitter.com/intent/tweet?text=Nueva%20tarjeta%20creada%20${props.dataResult.cardURL}`} className="twitter" target="_blank" rel="noreferrer">
>>>>>>> 8ae3db6aeaac4648d8d1feeab8a3238091be6320
              <FaTwitter></FaTwitter>
              Compartir en twitter
            </a>
          </div>
        </>
      );
    }
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 8ae3db6aeaac4648d8d1feeab8a3238091be6320

  return (
    <fieldset className="fieldset_share">
      <div className="option" onClick={handleToggle} id="share">
        <span className="option__span">
          <FaShareAlt></FaShareAlt>
          <h3 className="option__title">Comparte</h3>
        </span>
<<<<<<< HEAD
        <FaChevronDown
          className={props.toggleForm === "share" ? "" : "turn-around"}
        ></FaChevronDown>
      </div>
      <div
        className={`share ${props.toggleForm === "share" ? "" : "collapsed"}`}
      >
=======
        <FaChevronDown className={props.toggleForm === 'share' ? '' : 'turn-around'}></FaChevronDown>
      </div>
      <div className={`share ${props.toggleForm === 'share' ? '' : 'collapsed'}`}>
>>>>>>> 8ae3db6aeaac4648d8d1feeab8a3238091be6320
        <button
          className="share__button"
          name="create-card"
          value="create-card"
          onClick={props.handleClick}
        >
<<<<<<< HEAD
          {" "}
          <FaIdCard></FaIdCard> Crear tarjeta{" "}
        </button>
      </div>
      {renderShareCode()}
    </fieldset>
  );
};

export default Share;
=======
          {' '}
          <FaIdCard></FaIdCard> Crear
          tarjeta{' '}
        </button>
      </div>
      {renderShareCode()}


    </fieldset>
  )
};

Share.propTypes = {
  toggleCard: PropTypes.bool.isRequired,
  dataResult: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Share;
>>>>>>> 8ae3db6aeaac4648d8d1feeab8a3238091be6320
