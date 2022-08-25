import { useState } from "react";
import UploadBar from "../../../components/UploadBar/UploadBar";
import ThumbnailGallery from "../../../components/Gallery/ThumbnailGallery";

import classes from "./../../../Actions.module.css";

const CoursesActionsForm = (props) => {
  const [values, setValues] = useState(props.initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImageInputChange = (url, name) => {
    setValues({
      ...values,
      [name]: url,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const section = {
      title: values.title,
      date: values.date,
      time: values.time,
      location: values.location,
      descrption: values.description,
      eventImage: values.eventImage,
    };

    props.dispatchAction(section);
  };

  const heading = props.edit ? "Edytuj wydarzenie:" : "Dodaj wydarzenie:";

  return (
    <>
      <form className={classes["add-content-form"]}>
        <h1>{heading}</h1>
        <label htmlFor="title">Tytuł:</label>
        <textarea
          type="text"
          id="title"
          value={values.title}
          onChange={handleInputChange}
          name="title"
        />
        <label htmlFor="date">Data:</label>
        <textarea
          type="text"
          id="date"
          onChange={handleInputChange}
          value={values.date}
          name="date"
        />
        <label htmlFor="time">Godzina:</label>
        <textarea
          type="text"
          id="time"
          onChange={handleInputChange}
          value={values.time}
          name="time"
        />
        <label htmlFor="location">Lokalizacja:</label>
        <textarea
          type="text"
          id="location"
          onChange={handleInputChange}
          value={values.location}
          name="location"
        />
        <label htmlFor="description">Zawartość: </label>
        <textarea
          type="text"
          id="description"
          value={values.description}
          onChange={handleInputChange}
          name="description"
        />
      </form>
      <h3>
        Dodaj zdjęcie, które będzie się wyświetlało przy wydarzeniu na liście:
      </h3>
      <UploadBar
        presetImage={values.eventImage}
        returnLink={(url) => handleImageInputChange(url, "eventImage")}
      />
      <ThumbnailGallery source={[values.eventImage]} />
      <div className={classes.bottom_buttons}>
        {props.edit && (
          <button
            onClick={props.removeSectionHandler}
            data-testid="delete-button"
          >
            Usuń tę sekcję
          </button>
        )}
        <button onClick={submitHandler}>ZAAKCEPTUJ</button>
      </div>
    </>
  );
};

export default CoursesActionsForm;
