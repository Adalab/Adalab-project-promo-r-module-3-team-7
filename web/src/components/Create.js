import Form from "./Form";
import CardPreview from "./CardPreview";
import Header from "./Header";
import PropTypes from 'prop-types';
const Create = (props) => {

  return (
    <>
      <Header />
      <main className={`main-create ${props.selectedPalette}`}>
        <CardPreview
          handleReset={props.handleReset}
          selectedPalette={props.selectedPalette}
          person={props.person}
        />
        <Form person={props.person} handleInput={props.handleInput} dataResult={props.dataResult} setToggleForm={props.setToggleForm} toggleForm={props.toggleForm}
          toggleCard={props.toggleCard}
          handleClick
          ={props.handleClick
          } updateAvatar={props.updateAvatar}
          avatar={props.avatar}
        />
      </main>
    </>

  );
}

Create.propTypes = {
  handleReset: PropTypes.func.isRequired,
  selectedPalette: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
  dataResult: PropTypes.object.isRequired,
  setToggleForm: PropTypes.func.isRequired,
  toggleForm: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Create;