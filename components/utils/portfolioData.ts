import type { CareerProps } from '../CareerPath/Career';
import type {PortfolioProps } from '../Portfolios/Portfolio';
import type {SkillProps} from '../Skills/Skill';

interface PortfolioData {
    careerSets: CareerProps[],
    portfolioSets: PortfolioProps[],
    skillSets: SkillProps[]
}

const portfolioData: PortfolioData = {
    careerSets: [
        {
            companyName: "Miidas Inc.",
            companyLocation: "Tokyo, Japan",
            position: "Freelance Web Developer",
            workDetails: [
                "Developed job agency service which has more than 500k users with 10+ developers using React.js, Next.js, Sass, and Docker.", 
                "Developed and improved user search system by optimizing frontend side methods.",
                "Created multiple react custom hooks which observe user status and search conditions.",
                "Converted react's class components to functional components of the legacy application in order to release a new version of application with Next.js.",
                "Worked with UI/UX team to build and style new mobile-friendly websites and tested on both web and mobile applications."
            ],
            date: 2022,
        },
        {
            companyName: "IQVIA Solutions Japan Inc.",
            companyLocation: "Osaka, Japan",
            position: "Web Developer",
            workDetails: [
                "Developed CRM application with more than 50 team members using React.js, JavaScript and ASP.NET #C.", 
                "Implemented UI of time schedule page and task management page with React.js and Redux.",
                "Integrated some APIs with ASP.NET #C which provides data for task management system.",
                "Worked with tech lead closely to keep on track with project plan and timeline.",
                "Worked in big project with more than 100 developers to develop company product.",
                "Conducted maintenance and operation for both frontend and backend of deployed application."
            ],
            date: 2021,
        },
        {
            companyName: "Sprobe Inc.",
            companyLocation: "Cebu, Philippines",
            position: "Web Developer",
            workDetails: [
                "Led and supported UI team of 3-5 to develop Image editing service and Accounting notice system.", 
                "Developed and designed UI of some applications such as Image editing service and Accounting notice system.",
                "Built Attendance management mobile application alone from scratch using Native script.",
                "Developed UI of more than 7 applications from scratch using React.js, Javascript, and Native script.",
                "Integrated and hosted notification function along with Node.js and 3rd-party API."
            ],
            date: 2018,
        },
    ],
    portfolioSets: [
        {
            portfolioTitle:"React Ahat App",
            portfolioDesc:"Real time chat app allows user to communicate with other users and check realtime status of other users in the same chat room. You can create or choose a chat room as well. \n Built with React, React-redux, Typescript, and CSS. Used Node.js and socket.io for handling real time user status and text messaging.",
            portfolioId:"chatApp",
            portfolioGitLink:"https://github.com/Soma-dev0808/react-typescript-chat",
            portfolioImgPath:"/assets/chat_app.gif",
            skillUsed:[
              "React.js",
              "Typescript",
              "Redux",
              "Firebase",
              "Node.js",
            ],
        },
        {
            portfolioTitle:"Concentration",
            portfolioDesc:"A card game concentration. Within the limit time, you find all matches of 2 cards to win the game. You can change a difficulty and card design by clicking buttons in the header. Once you completed the game within a given time, you can post your score online to compete with other players. The score data is stored in firebase store. \n Created by React.ts and boosted development server by Vite.",
            portfolioId:"concentrationApp",
            portfolioGitLink:"https://github.com/Soma-dev0808/concentration",
            portfolioImgPath:"/assets/concentration.gif",
            isPosReverse: true,
            skillUsed:[
                "React.js", 
                "Typescript", 
                "Redux", 
                "Firebase", 
                "Vite"
            ],
        },
        {
            portfolioTitle:"Spotify App",
            portfolioDesc:"Spotify clone application which you can actually play a song. Fetch data for playlist and songs from 3rd party Spotify api. \n Created with Next.js and Tailwind css.",
            portfolioId:"spotifyApp",
            portfolioGitLink:"https://github.com/Soma-dev0808/spotify-clone",
            portfolioImgPath:"/assets/spotify_app.gif",
            skillUsed:[
                "React.js",
                "Typescript",
                "Recoil",
                "Next.js",
                "Tailwindcss",
            ],
        }
    ],
    skillSets: [
        {
            skillId:"reactjs",
            skillImg:"/assets/reactjs.png",
            skillTitle:"React.js(Typescript)",
            skillDesc:"In most of projects, I have used React.js, and have built web applications using class components or functional components. Also I mainly use redux to manage states. Create custom hooks is my fun part of web developing. Currenlty, I'm study typescript to work on a large scalable project in the future."
        },
        {
            skillId:"nextjs",
            skillImg:"/assets/nextjs.png",
            skillTitle:"Next.js",
            skillDesc:"I have used Next.js when develop Saas application to handle SSG and SSR in a company I worked before. I also use next.js for my personal projects to boost web application's performance and expand my web development skills. This landing page is also created by next.js."
        },
        {
            skillId:"nodejs",
            skillImg:"/assets/nodejs.png",
            skillTitle:"Node.js",
            skillDesc:"I have created some web applications with node.js in my previous company. I have experiences of integrating REST APIs, third party authentication, and push notification api. Also installed nodaemon to keep the server system alive to run notification api."
        },
        {
            skillId:"javascript",
            skillImg:"/assets/javascript.png",
            skillTitle:"Javascript",
            skillDesc:"Although I've been using React.js mainly for web development, javascript is also one of my powerful experience. I have developed and had system update CRA application using javascript in my previous company. I also used jquery and AJAX to make a web page look richer."
        },
    ]
}

export default portfolioData;