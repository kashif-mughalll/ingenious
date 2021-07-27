import { DB } from "./../../Firebase/Firebase-Configuration";

export var GetAllProjects = (profile) => async (dispatch, getState) => {
  try {
    var myKeywords = getState().Profile.keywords;
    var projects = [];
    var response = await DB.collection("Projects").get();
    response.forEach((project) => projects.push(project.data()));

    // Filtering

    projects.forEach((pro) => {
      pro.match = Match(pro.keywords, myKeywords);
    });

    projects.sort((a, b) => {
      if (a.match > b.match) return -1;
      if (a.match < b.match) return 1;
      return 0;
    });

    console.log(projects);

    dispatch({
      type: "SET_PROJECTS",
      payload: projects,
    });
  } catch (error) {
    console.error(error);
  }
};

function Match(Projectkeywords, Mydomains) {
  var Arr = 0;
  for (let i = 0; i < Projectkeywords.length; i++) {
    if (Mydomains.includes(Projectkeywords[i])) Arr++;
  }

  return parseInt((Arr / Projectkeywords.length) * 100);
}
