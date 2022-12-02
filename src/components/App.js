import "../styles/App.scss";
import ls from "../service/LocalStorage.js";
import dataApi from "../service/Api";
import { useState } from "react";
import {Route, Routes} from "react-router-dom";
import { FaTwitter } from 'react-icons/fa';

import Footer from "./Footer";
import Create from "./Create";
import Landing from "./Landing";



function App() {
  
  const [toggleCard, setToggleCard] = useState(false);
  const [toggleForm, setToggleForm] = useState("design");

  const [dataResult, setDataResult] = useState({});
  const [avatar, setAvatar] = useState("");

  const [person, setPerson] = useState(
    ls.get("fullObject", {
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      photo: "",
    })
  );

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setPerson({ ...person, photo: avatar });
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setPerson({ ...person, [inputName]: inputValue });
    console.log(inputName);
    console.log(inputValue);
    ls.set("fullObject", person);
  };

  let selectedPalette = "palette1";
  if (person.palette === "2") {
    selectedPalette = "palette2";
  } else if (person.palette === "3") {
    selectedPalette = "palette3";
  } else {
    selectedPalette = "palette1";
  }

  const handleReset = () => {
    setPerson({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      photo: "",
    });
    ls.clear();
    setToggleCard(false);
  };
  
    const handleClick = (e) => {
        e.preventDefault();
    
        setToggleCard(true);
    
        dataApi(person).then((data) => setDataResult(data));
      };
  return (
    <>
      {/*<!------------------------LANDING PAGE------------------------------------>
      <Landing />

      {/*<!------------------------CREATE PAGE------------------------------------>*/}
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/create" element={<Create handleReset={handleReset}
        selectedPalette={selectedPalette}
        person={person} handleInput={handleInput} dataResult={dataResult}  setToggleForm={setToggleForm} toggleForm={toggleForm}
        toggleCard={toggleCard}
        handleClick={handleClick} updateAvatar={updateAvatar}
        avatar={avatar}/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
