export var GetMyCollaborations = () => (dispatch, getState) => {
  setTimeout(() => {
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
  }, 2000);
};
