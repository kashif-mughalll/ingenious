import { DB } from "../../Firebase/Firebase-Configuration";

export var PostMyProject = (project) => async (dispatch, getState) => {
  try {
    let Projects = [...getState().PostedProjects];
    let response = await DB.collection("Projects").doc(project.id).set(project);
    console.log(response);
    Projects.push(project);
    dispatch({
      type: "SET_POSTED_PROJECTS",
      payload: Projects,
    });
  } catch (error) {
    console.log(error);
  }
};
