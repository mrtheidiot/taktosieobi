import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./AboutMeActions.module.css";
import AboutMeActionsForm from "./AboutMeActionsForm";

const AboutMeActions = (props) => {
  const dispatch = useDispatch();
  const aboutMe = useSelector((state) => state.aboutme.aboutMeContent);

  let initialValues = {
    title: "",
    part1: "",
    part2: "",
    part3: "",
    part4: "",
    part5: "",
    part6: "",
    part7: "",
    part8: "",
    sideImage: "",
  };

  let objectToEdit;
  if (props.id) {
    objectToEdit = aboutMe.find((item) => item.id === props.id);
    initialValues = {
      title: objectToEdit.title,
      part1: objectToEdit.part1,
      part2: objectToEdit.part2,
      part3: objectToEdit.part3,
      part4: objectToEdit.part4,
      part5: objectToEdit.part5,
      part6: objectToEdit.part6,
      part7: objectToEdit.part7,
      part8: objectToEdit.part8,
      sideImage: objectToEdit.title,
    };
  }

  const updateSection = (updatedObject) => {
    console.log(updatedObject);
  };

  return (
    <div>
      <AboutMeActionsForm
        initialValues={initialValues}
        updateSection={updateSection}
      />
    </div>
  );
};

export default AboutMeActions;
