import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import PropTypes from 'prop-types';

const Form = (props) => {

  const handleForm = (e) => {
    e.preventDefault();
  };
  const handleToggleForm = (value) => {
    props.setToggleForm(value);
  };

  return (
    <form method="get" action="" className="form" onSubmit={handleForm}>
      <Design
        handleToggleForm={handleToggleForm}
        person={props.person}
        toggleForm={props.toggleForm}
        handleInput={props.handleInput}
      />

      <Fill
        handleToggleForm={handleToggleForm}
        person={props.person}
        handleInput={props.handleInput}
        toggleForm={props.toggleForm}
        handleImage={props.handleImage}
        updateAvatar={props.updateAvatar}
        avatar={props.avatar}
      />

      <Share
        handleToggleForm={handleToggleForm}
        person={props.person}
        handleInput={props.handleInput}
        toggleForm={props.toggleForm}
        dataResult={props.dataResult}
        toggleCard={props.toggleCard}
        handleClick={props.handleClick}
        renderShareCode={props.renderShareCode}
      />
    </form>

  )
}

Form.propTypes = {
  person: PropTypes.object.isRequired,
  toggleForm: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleImage: PropTypes.func,
  updateAvatar: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  dataResult: PropTypes.object.isRequired,
  toggleCard: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  renderShareCode: PropTypes.func,
};
export default Form;
