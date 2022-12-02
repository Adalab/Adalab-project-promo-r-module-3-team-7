import Form from "./Form";
import CardPreview from "./CardPreview";
import Header from "./Header";
const Create = (props) =>{
    
    return(
    <>
    <Header />
    <main className={`main-create ${props.selectedPalette}`}>
      <CardPreview
        handleReset={props.handleReset}
        selectedPalette={props.selectedPalette}
        person={props.person}
      />
      <Form person={props.person} handleInput={props.handleInput} dataResult={props.dataResult}  setToggleForm={props.setToggleForm} toggleForm={props.toggleForm}
      toggleCard={props.toggleCard}
      handleClick
      ={props.handleClick
      }
     /> 
    </main>
    </>

    );
}
export default Create;