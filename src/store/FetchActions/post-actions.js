import { homePageActions } from "../homePage-slice";
import { coursesActions } from "../coursesList-slice";
import { uiActions } from "../ui-slice";

export const addHomeSection = (newSection) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    try {
      const response = await fetch(
        `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json`,
        {
          method: "POST",
          body: JSON.stringify(newSection),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      dispatch(
        homePageActions.addHomeSection({
          id: data.name,
          ...newSection,
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    } catch (error) {}
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};

export const addCoursesSection = (newSection) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    try {
      const response = await fetch(
        `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/trainingCourses.json`,
        {
          method: "POST",
          body: JSON.stringify(newSection),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log({
        id: data.name,
        ...newSection,
      })
      dispatch(
        coursesActions.addCourseSection({
          id: data.name,
          ...newSection,
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    } catch (error) {}
    dispatch(uiActions.setIsOverlayLoading(false));
  };
}