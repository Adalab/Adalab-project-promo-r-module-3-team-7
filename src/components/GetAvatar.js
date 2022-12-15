import React from 'react';
import PropTypes from 'prop-types';

function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {


    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  return (
    <div className="fillform__image">
      <label className="fillform__image--button">
        Añadir imagen
        <input
          type="file"
          name="photo"
          id="photo"
          ref={myFileField}
          className="hidden"
          onChange={uploadImage}
        />
      </label>

      <div
        className="fillform__image--square"
        style={{ backgroundImage: `url(${props.avatar})` }}
      ></div>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;