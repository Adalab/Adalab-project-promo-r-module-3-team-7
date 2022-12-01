const Share = (props) => {
    return (
        <fieldset className="fieldset_share">
        <div className="option" onClick={handleToggle} id="share">
          <span className="option__span">
            <FaShareAlt></FaShareAlt>
            <h3 className="option__title">Comparte</h3>
          </span>
          <FaChevronDown className={props.toggleForm === 'share' ? '' : 'turn-around'}></FaChevronDown>
        </div>
        <div className={`share ${props.toggleForm === 'share' ? '' : 'collapsed'}`}>
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
    )};

    export default Share;