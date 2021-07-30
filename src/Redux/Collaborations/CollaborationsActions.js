import { DB } from "./../../Firebase/Firebase-Configuration";

export var GetMyCollaborations = () => (dispatch, getState) => {
  const Projects = getState().Projects;
  const id = getState().Auth.id;
  var myCollaboration = [];

  Projects.forEach((project) => {
    if (project.collaborators) {
      project.collaborators.forEach((collaborator) => {
        if (collaborator.id == id) myCollaboration.push(collaborator);
      });
    }
  });
  dispatch({
    type: "SET_COLLABORATION",
    payload: myCollaboration,
  });
};

export var EndCollaboration = (data) => async (dispatch, getState) => {
  let project = await DB.collection("Projects").doc(data.pid).get();
  let newArr = [];
  project.data().collaborators.forEach((element) => {
    if (data.rid != element.rid) newArr.push(element);
  });
  let UpdatedProject = {...project.data()};
  UpdatedProject.collaborators = newArr;
  await DB.collection("Projects").doc(data.pid).set(UpdatedProject);

  let state = [...getState().Collaborations];
  let newState = [];
  state.forEach((element)=>{
    if(element.rid != data.rid) newState.push(element);
  })
  dispatch({
    type: "SET_COLLABORATION",
    payload: newState,
  });
};
