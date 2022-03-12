/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import { useContext } from "react";
import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "범진 / 강사",
  title:[
      "Hi!  ",
      "Lecturer ",
      "BEOMJIN"],
  subTitle: 
  [
      "끊임없이 노력하는 ",
      "수학강사 김범진입니다",
  ],
  resumeLink:"https://beomd.github.io",
  // Set to empty to hide the button
  
  displayGreeting: true // Set false to hide this section, defaults to true
};

const skillsSection2 = {
    title: "Lecturer Skills",
    subTitle: "초,중,고 넓은 스펙트럼의 수학 지도 경력을 다년간 보유하고 있습니다",
    skills: [ 
      "조교부터 파트, 전임까지 차근차근 업무능력을 쌓아왔습니다",
      "교육과정 변화에 발맞춰 지속적으로 학습, 지도해왔습니다",
    ],    
      softwareSkills: [
      {
        skillName: "초등",
        fontAwesomeClassname: "fas fa-calculator-alt"
      },
      {
        skillName: "중등",
        fontAwesomeClassname: "fas fa-square-root"
      },
      {
        skillName: "고등",
        fontAwesomeClassname: "fas fa-function"
      },
      {
        skillName: "미적분",
        fontAwesomeClassname: "fas fa-integral"
      },
      {
        skillName: "확률통계",
        fontAwesomeClassname: "fas fa-chart-scatter-bubble"
      },
      {
        skillName: "기하",
        fontAwesomeClassname: "fas fa-arrow-up-square-triangle"
      },
      {
        skillName: "문항출제경험",
        fontAwesomeClassname: "fas fa-file-lines"
      },
    ],
    display: true
}

// Education Section
const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
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


// Work experience section



const workExperiences = {
    display: false, //Set it to true to show workExperiences Section
    experience: [
      {
        role: "서버관리자(HP-UX Server Administer)",
        company: "대한민국공군(ROKAF)",
        companylogo: require("./assets/images/facebookLogo.png"),
        date: "Feb 2018 – July 2019",
        desc: "공군 방공관제사 예하 체계운영반장",
        descBullets: [
          "체계운영실 서버복구조장",
          "체계운영실 서버업데이트 등 임명수행"
        ]
      },
      {
        role: ["전자중대장","(Commander of electrical and electronic)"],
        company: "대한민국공군(ROKAF)",
        companylogo: require("./assets/images/airbnbLogo.png"),
        date: "July 2019 – Nov 2020",
        desc: "8145부대 전자중대장",
        descBullets: [
          "중대장, 암호장비관리책임관 등 임명수행",
          "8145부대 정훈장교",
          "표준화평가 지도방문 수감유공(`20. 6.)",
          "중위 만기전역('20. 11. 30)",
        ]
      },   
      {
        role: ["SW개발자","(Software Developer)"],
        company: "위노아이(WINOI)",
        companylogo: require("./assets/images/winoi.png"),
        date: "2022 ~ 재직중",
        desc: "서울 서대문구 연세로2나길61",
        descBullets: [
          "Kotlin기반 Android 개발자",
      ]
      },
    ]
  };

  const workExperiences2 = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: ["중고등 수학조교","(Mathematics Education Assistant)"],
        company: "수학의아침",
        companylogo: require("./assets/images/MorningMath.png"),
        date: "2013",
        desc: "중고등 수학조교",
        descBullets: [
          "중고등 자습실 수학 질의응답",
          "개별 클리닉 수업 진행"
      ]
    },  
    {
        role: ["중고등 수학조교","(Mathematics Education Assistant)"],
        company: "하이젠수학",
        companylogo: require("./assets/images/Haizen.png"),
        date: "2013",
        desc: "중고등 수학조교",
        descBullets: [
          "중고등 자습실 수학 질의응답",
          "개별 클리닉 수업 진행",
      ]
    },   
      {
          role: ["수학조교팀장","(Manager Of Mathematics Education Assistants Team)"],
          company: "블루M수학학원",
          companylogo: require("./assets/images/BlueM.png"),
          date: "2013 ~ 2017",
          desc: "파트&전임",
          descBullets: [
            "중고등 수학질의",
            "관리조교 인사업무(선발 및 배정,관리)",
            "관리조교 선발시험 직접출제"
        ]
      },  
      {
          role: ["복습관리담당",""],
          company: "픽수학학원",
          companylogo: require("./assets/images/Picksu.png"),
          date: "2021.Nov ~ 2022 Feb",
          desc: "전임",
          descBullets: [
            "초중등 복습관리수업 전임",
            "겨울방학 특강 수업 진행",
        ]
      },
      {
        role: ["중고등수학"],
        company: "",
        //companylogo: require("./assets/images/GongmoonMath.png"),
        date: "2022 Feb ~ 재직중",
        desc: "파트",
        descBullets: [
          "재직중",
      ]
      },  
      /*  
      {
        role: ["중고등수학","&클리닉"],
        company: "공문수학학원",
        companylogo: require("./assets/images/GongmoonMath.png"),
        date: "2022 Feb ~ 재직중",
        desc: "파트",
        descBullets: [
          "중고등 파트",
      ]
    },  
    */    
    ]
  };

// Some big projects you have worked on
const contactInfo = {
    title: emoji("연락처"),
    subtitle:[
      "언제든지 일할 준비가 되어있습니다. ",
    ],
    number: "010-5815-6035",
    email_address: "bamjin_e@protonmail.com"
  };
  





//-----------------------------------------------------------------------------------------------------------------------------

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/BeomD",
    display: false // Set true to display this section, defaults to false
  };
  
  // Skills Section
  
  const skillsSection = {
    title: "Lecturer Skills",
    subTitle: "초,중,고 넓은 스펙트럼의 수학 지도 경력을 다년간 보유하고 있습니다",
    skills: [
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
      },
  
      {
          skillName: "Kotlin",
          fontAwesomeClassname: "fab fa-android"
        },
    ],
    display: false // Set false to hide this section, defaults to true
  };
  
  
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
      {
          image: require("./assets/images/denpic.png"),
          projectName: "DENPIC",
          projectDesc: [
              "Kotlin기반 안드로이드 앱 개발 진행중",
            ], 
        },
    ],
   
    display: false // Set false to hide this section, defaults to true
    
  };
const techStack = {
    viewSkillBars: false, //Set it to true to show Proficiency Section
    experience: [
      {
        Stack: "C", //Insert stack or technology you have experience in
        progressPercentage: "90%" //Insert relative proficiency in percentage
      },
      {
        Stack: "Java",
        progressPercentage: "80%"
      },
      {
          Stack: "HTML&CSS",
          progressPercentage: "60%"
      },
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  };


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
  skillsSection2,
  educationInfo,
  techStack,
  workExperiences,
  workExperiences2,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
