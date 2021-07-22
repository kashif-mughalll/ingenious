var Idea = {
  id: "project id",
  postedDate: "01/01/2020",
  title: "project title",
  description: "description",
  postedBy: "user id of idea/project owner",
  fields: ["field1", "field2"],

  collaborators: [
    {
      id: "user id of collaborator",
      fields: ["IT", "civil", "machanical"],
    },
  ],
};


var profile = {
  country: "india",
  keywords: ["key1", "key2"],
  contact: "0333321322",
  description: "hello this is my profile this and that etc",
  title: "Web Developer",
  ...Auth,
};


// useEffect(async () => {
//   const Arr = await DB.collection('Projects').where('postedBy.id', "==" ,'w2ydAVYwXefQ68LXlugmDPy4S4I3').get();
  
//   Arr.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
  
// }, []);