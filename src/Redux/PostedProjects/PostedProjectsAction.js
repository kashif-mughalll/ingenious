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

export var GetMyProjects = () => async (dispatch, getState) => {
  try {
    let MyProjects = [];
    let id = getState().Auth.id ? getState().Auth.id : ''; // person not authenticated
    let response = await DB.collection("Projects").where("postedBy.id" , "==" , id).get();
    response.forEach((doc) => MyProjects.push(doc.data()));
    dispatch({
      type: "SET_POSTED_PROJECTS",
      payload: MyProjects,
    });
  } catch (error) {
    console.log(error);
  }
};

export var DeleteProject = (id) => async (dispatch) => {
  try {    
    let response = await DB.collection("Projects").doc(id).delete();
    console.log(response)
    GetMyProjects();
  } catch (error) {
    console.log(error);
  }
}

