import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

const Form = (props)=> {
    
    const handleForm = (e) => {
        e.preventDefault();
      };
      const handleToggleForm = (value) => {
        props.setToggleForm(value);
      };
      //TODO:review
    
    return(
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
          />

          <Share
            handleToggleForm={handleToggleForm}
            person={props.person}
            handleInput={props.handleInput}
            toggleForm={props.toggleForm}
            dataResult={props.dataResult}
            toggleCard={props.toggleCard}
            handleClick={props.handleClick}
            // todo:review
           
          />
        </form>

    )
}
export default Form;