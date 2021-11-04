import { IService, ISkill } from './type'
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { BsCircleFill } from 'react-icons/bs';
import { IProject } from './type';


export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "Develop highly interactive Frontend / User Interfaces for your web applications.",
      }, 
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "Develop Scalable server, handle database, Implement security and data protection",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "Develop robust APIs and RESTful services",
      },
      // {
      //   Icon: FaMobile,
      //   title:"Mobile Development",
      //   about: "a daily problem solver",
      // },
      {
        Icon: AiOutlineAntDesign,
        title: "Programming",
        about:
          " Develop functional and sustainable applications with clean codes",
      },
      {
        Icon: RiComputerLine,
        title: "Problem Solving",
        about:
         "A daily problem solver",
      },
      
]

export const languages:ISkill[] = [
 
  {
    name: 'Html',
    level: '85%',
    Icon: BsCircleFill
  },
  {
    name: 'Css',
    level: '65%',
    Icon: BsCircleFill
  },
  {
    name: 'Tailwind Css',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Javascript',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'React js & Next js',
    level: '65%',
    Icon: BsCircleFill
  },
  {
    name: 'Redux',
    level: '65%',
    Icon: BsCircleFill
  },
  {
    name: 'Typescript',
    level: '55%',
    Icon: BsCircleFill
  },
 
  
]

export const tools :ISkill[] = [
  // {
  //   name: 'Vs Code',
  //   level: '85%',
  //   Icon: BsCircleFill
  // },
  // {
  //   name: 'Postman',
  //   level: '75%',
  //   Icon: BsCircleFill
  // },
  // {
  //   name: 'Android Studio',
  //   level: '65%',
  //   Icon: BsCircleFill
  // },
  // {
  //   name: 'Mongodb Compass',
  //   level: '85%',
  //   Icon: BsCircleFill
  // },
  // {
  //   name: 'Table Plus',
  //   level: '50%',
  //   Icon: BsCircleFill
  // },
  {
    name: 'Node',
    level: '85%',
    Icon: BsCircleFill
  },
  {
    name: 'MongoDB',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'Grapqhl',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Git',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'Postgresql',
    level: '55%',
    Icon: BsCircleFill
  },
  {
    name: 'Sequelize',
    level: '65%',
    Icon: BsCircleFill
  },
  {
    name: 'Firebase',
    level: '50%',
    Icon: BsCircleFill
  },


]

export const projects: IProject[] = [
  { 
    id: 1,
    // name: "COVID Tracker",
    // description:
    //   "This app shows a statistical view about corona virus over the world",
    // image_path: "/images/covid.jpg",
    // deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    // github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    // category: ["react"],
    // key_techs: ["React", "Chart.js", "Material UI"],
    name: "24SEVEN",
    description:
      "This is an electronic  E-commerce store",
    image_path: "/images/247.png",
    deployed_url: "https://prosevenapp.herokuapp.com/",
    github_url: "https://github.com/AwaabSingh/24SEVEN",
    category: ["react", "node", "express", "mongo"],
    key_techs: ["React", "Node", "Bootstrap","Express", "Redux", "MongoDB"],
  },
  {
    id: 2,
    name: "Github Finder",
    image_path: "/images/git.png",
    deployed_url: "https://github-finder-plum.vercel.app",
    github_url: "https://github.com/AwaabSingh/Github_finder",
    category: ["react"],
    description:
      "A web application to search github users",
    key_techs: ["React", "github api", "css"],
  },

  {
    id: 3,
    name: "Multi Deck Api",
    image_path: "/images/mda.png",
    deployed_url: "http://multideck.herokuapp.com/",
    github_url: "https://github.com/AwaabSingh/multideck_api",
    category: ["node", "mongo", "express", "api"],
    description:
      "A rest api for a Multi-client website offering client services",
    key_techs: [
      "Node",
      "Express",
      "Mongo",
      "REST API",
    ],
  },

  {
    id: 4,
    name: "Contact Keeper",
    image_path: "/images/contact.png",
    deployed_url: "https://blooming-badlands-54712.herokuapp.com/",
    github_url: "https://github.com/AwaabSingh/ContactKeeper",
    category: ["node", "react", "mongo"],
    description:
     "A web application for managing contacts",
    key_techs: ["React", "Node", "Express", "Css"],
  },

  {
    id: 5,
    name: "Expense Tracker",
    image_path: "https://res.cloudinary.com/dgfdgi5hf/image/upload/v1636008468/Screenshot_from_2021-11-04_07-37-49_rguxiy.png",
    deployed_url: "https://expense-tracker-dun-six.vercel.app/",
    github_url: "https://github.com/AwaabSingh/Expense-Tracker",
    category: [ "react", "Css"],
    description:
      "A web application that helps to keep an accurate record of your money inflow and outflow.",
    key_techs: ["React"],
  },

  // {
  //   id: 6,
  //   name: "Color Classification using tf.js",
  //   image_path: "/images/color.jpg",
  //   deployed_url: "!#",
  //   github_url: "https://github.com/Dey-Sumit/color-classification",
  //   category: ["express"],
  //   description:
  //     "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  //   key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  // },
  // {
  //   id: 7,
  //   name: "YouTube using YouTube ",
  //   image_path: "/images/youtubeClone.png",
  //   deployed_url: "https://not-utube.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  //   category: ["express"],
  //   description:
  //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  //   key_techs: [
  //     "React",
  //     "Redux",
  //     "Firebase Auth",
  //     "YouTube API",
  //     "Sass",
  //     "Bootstrap",
  //   ],
  // },
  // {
  //   id: 8,
  //   name: "Football App",
  //   image_path: "/images/football.png",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/football-app",
  //   category: ["react"],
  //   description:
  //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  // },
];
