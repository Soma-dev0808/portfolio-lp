import type { CareerProps } from '../CareerPath/Career';
import type {PortfolioProps } from '../Portfolios/Portfolio';
import type {SkillProps} from '../Skills/Skill';

interface PortfolioData {
    careerSets: CareerProps[],
    portfolioSets: PortfolioProps[],
    skillSets: SkillProps[],
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
            portfolioTitle:"React Chat App",
            portfolioDesc:"<span style='color: var(--primaryClr)'>Real time chat app</span> allows user to communicate with other users and check realtime status of other users in the same chat room. You can create or choose a chat room as well. \n <span style='color: var(--primaryClr)'>Built with</span> React, React-redux, Typescript, and CSS. Used Node.js and socket.io for handling real time user status and text messaging.",
            portfolioId:"chatApp",
            portfolioLiveAppLink: "https://real-time-chat-cc29e.web.app/",
            portfolioGitLink:"https://github.com/Soma-dev0808/react-typescript-chat",
            portfolioGifPath:"/assets/portfolioGif/chat_app.gif",
            portfolioImgPath:"/assets/portfolioImg/reactChatApp.png",
            skillUsed:[
              "React.js",
              "Typescript",
              "Redux",
              "Firebase",
              "Node.js",
            ],
            duration: "2 months",
            impDescription: [
                "Used Redux toolkit to manage message and api status states.",
                "Used bindActionCreators to separate business logic and component as much as possible which keeps component clean.",
                "Used Firestore to keep chat messages and user info.",
                "Used socket.io to store chat messages temporarily in backend side to avoid fecthing messages everytime when the firestore's data is changed.",
                "Socket.io is also used to keep user's online status in a same chat room.",
            ],
            difficultPart: "<span style='color: var(--primaryClr)'>To dynamically change a chat room information</span> when user switches a room, I needed to think how I can simply switch data. The chat page can be divided into three parts which are a sidebar we can check other chat rooms, a chat room header for displaying chat room name and users joined in the room, and a chat messages list. Data in these sections are fetched based on the chat room name, so that I wanted to observe it and when it changed fetch the next room information. \n <span style='color: var(--primaryClr)'>For this solution,</span> I set a room name in URL and everytime when the room name in URL is changed, I made it to fetch data for the next page.",
            other: "If you want try this applcation without registration, you can use test account below. \n \n Account1 Email: <span style='color: var(--primaryClr)'>test1.test@test.com</span> Password: <span style='color: var(--primaryClr)'>test1test1234</span> \n Account2 Email: <span style='color: var(--primaryClr)'>test2.test@test.com</span> Password: <span style='color: var(--primaryClr)'>test2test1234</span>",
            prevPortfolio: {pid:'spotifyApp', pname: "Spotify App"},
            nextPortfolio: {pid: "concentrationApp", pname: "Concentration"},
        },
        {
            portfolioTitle:"Concentration",
            portfolioDesc:"<span style='color: var(--primaryClr)'>A card game concentration</span> you find all matches of 2 cards within limit time to win the game. You can change a difficulty and card design by clicking buttons in a header. Once you completed the game within a given time, you can post your score online to compete with other players. The score data is stored in firebase store. \n <span style='color: var(--primaryClr)'>This application is</span> created by React.ts and Vite boosted development server.",
            portfolioId:"concentrationApp",
            portfolioLiveAppLink: "https://concentration-git-main-soma-dev0808.vercel.app/",
            portfolioGitLink:"https://github.com/Soma-dev0808/concentration",
            portfolioGifPath:"/assets/portfolioGif/concentration.gif",
            portfolioImgPath:"/assets/portfolioImg/concentration.png",
            isPosReverse: true,
            skillUsed:[
                "React.js", 
                "Typescript", 
                "Redux", 
                "Firebase", 
                "Vite"
            ],
            duration: "2 weeks",
            impDescription: [
                "Used Vite to make the development experience better.",
                "Used Redux Toolkit to manage state of card game.",
                "Used bindActionCreators from Redux to separate business logic from components as much as possible.",
                "Integrated custom hooks to help observing game status.",
                "Used Firestore to store score data and user name for a ranking system.",
                "Implemented function to change difficulty and card design.",
                "Deployed on vercel which is easy to deploy frontend applications."
            ],
            difficultPart: "<span style='color: var(--primaryClr)'>The rule for the card game</span> is pretty simple, but it was quite hard for me to implement when it comes to converting the rule into code. Especially, keeping card statuses such as if card is flipped or not was a tough part. \n <span style='color: var(--primaryClr)'>To overcome this part,</span> I separated codes into small pieces as mush as possible which is more readable and easier to maintain. So that I was able to avoid confusion while developing.",
            other: "",
            prevPortfolio: {pid:"chatApp", pname: "React Chat App"},
            nextPortfolio: {pid:'spotifyApp', pname: "Spotify App"}
        },
        {
            portfolioTitle:"Spotify App",
            portfolioDesc:"<span style='color: var(--primaryClr)'>Spotify clone application</span> which you can actually play songs. Once you connect and login to spotify, this application fetches playlists and songs from 3rd party Spotify api for you. \n This applications is created with Next.js and Tailwind css.",
            portfolioId:"spotifyApp",
            portfolioLiveAppLink: "https://spotify-clone-lqvvronck-soma-dev0808.vercel.app/",
            portfolioGitLink:"https://github.com/Soma-dev0808/spotify-clone",
            portfolioGifPath:"/assets/portfolioGif/spotify_app.gif",
            portfolioImgPath:"/assets/portfolioImg/spotifyLike.png",
            skillUsed:[
                "React.js",
                "Typescript",
                "Recoil",
                "Next.js",
                "Tailwindcss",
            ],
            duration: "2 weeks",
            impDescription: [
                "Used Next.js to implement SSG. Although actual spotify might need SSR to integrate something like \"like song\" feature, this application only focuses on how I can copy the layout of Spotify and the play songs part.",
                "Used Recoil to manage state. Since recoil is good at encapsulating business logics, I wanted to try this API.",
                "Used Tailwindcss which helps us to develop UI faster."
            ],
            difficultPart: "<span style='color: var(--primaryClr)'>It's not really hard part,</span> but I had to create a react custom hook for previous and next songs information to integrate play previous or next song feature. \n <span style='color: var(--primaryClr)'>After fetching playlist information,</span> the custom hook will find a current song information, and then find next and previous song information. Once previous and next song data is prepared, return them to where the custom hook is beign called.",
            other: "",
            prevPortfolio: {pid: "concentrationApp", pname: "Concentration"},
            nextPortfolio: {pid:"chatApp", pname: "React Chat App"},
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