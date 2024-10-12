// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  gradientColors: "#336699, #12a598, #cc7a0d, #7a3d99, #cc6666, #b3b6b7",
  firstName: "Genaro",
  middleName: "",
  lastName: "Pennone",
  message: "Fullstack",
  restMessage: "Developer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/genaro14",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gpennone/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/avatar.jpg"),
  imageSize: 375,
  message:
    "I am a passionate developer with experience creating interactive websites and applications, backend strong, who loves software crafting and technology.",
  resume: "https://genaro14.github.io/minimalCv/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "genaro14", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/avatar.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/avatar.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "PHP", value: 65 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "Docker", value: 80 },
    { name: "Git", value: 80 },
  ],
  softSkills: [
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "if you have any questions or comments, please get in touch.",
  email: "genaropennone@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      company: 'Portinos Agencia Digital',// Here Add Company Name
      role: 'Tech Lead',
      companylogo: require('../assets/img/portinos.png'),
      date: 'February 2024 – Present',
    },
    {
      company: 'Ultra Mobile / Mint Mobile', //Here Add Company Name
      role: 'Software Engineer',
      companylogo: require('../assets/img/ultra.png'),
      date: 'September 2022 – December 2023',
    },
    {
      company: 'IT10 coop', //Here Add Company Name
      role: 'Associate / Developer',
      companylogo: require('../assets/img/it10.png'),
      date: 'March 2016 – December 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
