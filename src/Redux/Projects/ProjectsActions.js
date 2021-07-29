import { DB } from "./../../Firebase/Firebase-Configuration";

export var GetAllProjects = () => async (dispatch, getState) => {
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

    dispatch({
      type: "SET_PROJECTS",
      payload: projects,
    });
  } catch (error) {
    console.error(error);
  }
};

export var AddCollaborator = (Obj) => async (dispatch, getState) => {
  try {
    let Project = await DB.collection("Projects").doc(Obj.pid).get();

    var Arr;
    if (!Project.data().collaborators) Arr = [Obj];
    else {
      Arr = [...Project.data().collaborators];
      Arr.push(Obj);
    }

    await DB.collection("Projects").doc(Obj.pid).update({
      collaborators: Arr,
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

  return parseInt((Arr / Mydomains.length) * 100);
}
