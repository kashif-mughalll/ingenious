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

export const project = {
  title: 'E-Commerse Web App',
  postedAt: "Mon Jul 26 2021",
  duration: "2021-07-26 To 2021-08-16",
  location: "Pakistan",
  keywords: [
    "development",
    "designing",
    "accounts",
    "mangement",
    "feild4",
    "feild5"
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam eos nulla beatae, tempora necessitatibus distinctio alias esse porro consectetur corrupti quia sapiente earum perferendis aliquam doloribus sunt, itaque voluptatum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam eos nulla beatae, tempora necessitatibus distinctio alias esse porro consectetur corrupti quia sapiente earum perferendis aliquam doloribus sunt, itaque voluptatum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam eos nulla beatae, tempora necessitatibus distinctio alias esse porro consectetur corrupti quia sapiente earum perferendis aliquam doloribus sunt, itaque voluptatum.
  `,
  postedBy: {
    id: "kZLLZdlhYYViG7hEfN4icdAFwAq2",
    name: 'Muhammad Hamza Siddiqui',
    picture: "https://lh3.googleusercontent.com/a/AATXAJx2fgugwnoZvRc4XfDw_Ency8C0waYu6y1UziFj=s96-c"
  }
}


// useEffect(async () => {
//   const Arr = await DB.collection('Projects').where('postedBy.id', "==" ,'w2ydAVYwXefQ68LXlugmDPy4S4I3').get();
  
//   Arr.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
  
// }, []);