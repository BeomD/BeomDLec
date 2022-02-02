/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import { useContext } from "react";
import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "범진",
  title:[
      "Hi!  ",
      "신입개발자 ",
      "김범진입니다"],
  subTitle: 
  [
      "계속 공부하고 발전하는 ",
      "개발자 김범진입니다",
  ],
  resumeLink:require("https://github.com/BeomD/BeomD.github.io/resume.png"),//"https://github.com/BeomD/BeomD.github.io/resume.png", // Set to empty to hide the button
  
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BeomD",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "스킬",
  subTitle: "숙련된 C, Java 프로그래밍 능력을 보유하고 있으며 기초적인 HTML,CSS 능력을 보유하고있습니다",
  skills: [
    "<어학>",
    "TOEIC : 805",
    "<자격>",
    "정보처리기사 / 육상무선통신사 / 한국사검정능력1급",
    "<특징>",
    "임베디드를 전공하였기 때문에 C언어에 능통합니다.",
    "언어 학습 및 습득 속도가 빠릅니다",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },

    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Incheon National University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Embedded System Engineering",
      duration: "March 2012 - Feb 2017",
      desc: "Senior Project : Smart IoT Fitness Mattress based on Multi-Processor",
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Word&Document",
      progressPercentage: "80%"
    },
    {
        Stack: "Project&HR Management",
        progressPercentage: "90%"
    },
    {
        Stack: "Communication Skill",
        progressPercentage: "90%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "서버관리자(HP-UX Server Administer)",
      company: "대한민국공군(ROKAF)",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Feb 2018 – July 2019",
      desc: "공군 방공관제사 예하 체계운영반장",
      descBullets: [
        "체계운영실 서버복구조장",
        "체계운영실 서버업데이트 등 다수 임명수행"
      ]
    },
    {
      role: ["전자중대장","(Commander of electrical and electronic)"],
      company: "대한민국공군(ROKAF)",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "July 2019 – Nov 2020",
      desc: "8145부대 전자중대장",
      descBullets: [
        "중대장 업무 외 암호장비관리책임관 등 다수 임명수행",
        "상훈 : 표준화평가 지도방문 수감유공(`20. 6.)",
    ]
    }
  ]
};


// Some big projects you have worked on

const bigProjects = {
  title: "프로젝트",
  subtitle: "Projects",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "멀티프로세서 기반 스마트 IoT 피트니스 매트(Smart IoT Fitness Mattress based on Multi-Processor)",
      projectDesc: [
          "학부졸업 프로젝트 / I2C통신 기반 Atmega-128 CPU 멀티프로세서 구성 / 센서정보 실시간 송수신(BT&Serial) / ",
          "Java 기반 Guide SoftWare 탑재",     
        ], 
    },
  ],
  display: true // Set false to hide this section, defaults to true
  
};


const contactInfo = {
    title: emoji("연락처"),
    subtitle:[
      "언제든지 일할 준비가 되어있습니다. ",
    ],
    number: "010-3901-5700",
    email_address: "bamjin_e@protonmail.ch"
  };
  















  



//-----------------------------------------------------------------------------------------------------------------------------
const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
  };
// Blogs Section
const blogSection = {
   display: false // Set false to hide this section, defaults to true
};
// Talks Sections
const talkSection = {
  display: false // Set false to hide this section, defaults to true
};
// Podcast Section
const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};
// Twitter Section
const twitterDetails = {
  display: false // Set true to display this section, defaults to false
};

const achievementSection = {
    display: false // Set false to hide this section, defaults to true
  };
  
//---------------------------------------------------------------------------------------------------------------------------------



export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
