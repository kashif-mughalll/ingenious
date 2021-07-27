var initialState = [];

var ProjectsReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_PROJECTS": 
      return payload;
    case "REMOVE_PROJECTS": 
      return null;
    default:
      return state;
  }
};

export default ProjectsReducer;

