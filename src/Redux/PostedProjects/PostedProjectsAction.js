import { DB, RDB } from "../../Firebase/Firebase-Configuration";

export var PostMyProject = (project) => async (dispatch, getState) => {
  try {
    let Projects = [...getState().PostedProjects];
    await DB.collection("Projects").doc(project.id).set(project);
    Projects.push({
      ...project,
      collaborators: [],
    });
    dispatch({
      type: "SET_POSTED_PROJECTS",
      payload: Projects,
    });
  } catch (error) {
    console.log(error);
  }
};

export var UpdateMyProject = (project) => async (dispatch, getState) => {
  try {
    let Projects = [];
    getState().PostedProjects.forEach((element) => {
      if (project.id != element.id) Projects.push(element);
    });
    Projects.push(project);
    await DB.collection("Projects").doc(project.id).set(project);    
    dispatch({
      type: "SET_POSTED_PROJECTS",
      payload: Projects,
    });
  } catch (error) {
    console.log(error);
  }
};

export var GetMyProjects = () => async (dispatch, getState) => {
  try {
    let MyProjects = [];
    let id = getState().Auth.id ? getState().Auth.id : ""; // person not authenticated
    let response = await DB.collection("Projects")
      .where("postedBy.id", "==", id)
      .get();
    response.forEach((doc) => MyProjects.push(doc.data()));
    dispatch({
      type: "SET_POSTED_PROJECTS",
      payload: MyProjects,
    });
  } catch (error) {
    console.log(error);
  }
};

export var DeleteProject = (id) => async (dispatch, getState) => {
  try {
    let response = await DB.collection("Projects").doc(id).delete();
    const List = [];
    getState().Requests.forEach((element) => {
      if (element.pid != id) List.push(element);
    });
    await RDB.ref(`Requests/`).child(getState().Auth.id).set({ list: List });
  } catch (error) {
    console.log(error);
  }
};
