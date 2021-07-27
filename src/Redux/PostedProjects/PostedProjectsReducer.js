var initialState = [];

var PostedProjectsReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_POSTED_PROJECTS": 
      return payload;
    case "RESET_POSTED_PROJECTS": 
      return [];
    default:
      return state;
  }
};

export default PostedProjectsReducer;

