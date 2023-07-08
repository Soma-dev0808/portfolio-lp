import type { CareerProps } from "../CareerPath/Career";
import type { PortfolioProps } from "../Portfolios/Portfolio";
import type { SkillProps } from "../Skills/Skill";

interface PortfolioData {
  careerSets: CareerProps[];
  portfolioSets: PortfolioProps[];
  skillSets: SkillProps[];
}

const portfolioData: PortfolioData = {
  careerSets: [
    {
      companyName: "80&Company Inc.",
      companyLocation: "Kyoto, Japan",
      position: "Freelance Senior Frontend Developer",
      workDetails: [
        "Conducted front-end technology assessments, selecting optimal frameworks, libraries, and tools.",
        "Designed and developed front-end components, adhering to industry best practices.",
        "Performed thorough code reviews, providing valuable feedback for quality improvement.",
        "Assigned tasks and provided clear instructions to ensure smooth project execution and delivery.",
        "Supported the development of interns in a front-end development setting.",
      ],
      date: 2023,
    },
    {
      companyName: "Miidas Inc.",
      companyLocation: "Tokyo, Japan",
      position: "Freelance Web Developer",
      workDetails: [
        "Developed job agency service which has more than 500k users with 10+ developers using React.js, Next.js, Sass, and Docker.",
        "Developed and improved user search system by optimizing frontend side methods.",
        "Created multiple react custom hooks which observe user status and search conditions.",
        "Converted react's class components to functional components of the legacy application in order to release a new version of the application with Next.js.",
        "Worked with UI/UX team to build and style new mobile-friendly websites and tested on both web and mobile applications.",
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
        "Integrated some APIs with ASP.NET #C, which provides data for the task management system.",
        "Worked with tech lead closely to keep on track with project plan and timeline.",
        "Worked on big project with more than 100 developers to develop company products.",
        "Conducted maintenance and operation for both frontend and backend of the deployed application.",
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
        "Integrated and hosted notification function along with Node.js and third-party API.",
      ],
      date: 2018,
    },
  ],
  portfolioSets: [
    {
      portfolioTitle: "React Chat App",
      portfolioDesc:
        "<span style='color: var(--primaryClr)'>The real-time chat app</span> allows users to communicate with other users and check real-time status of other users in the same chat room. You can create or choose a chat room as well. \n <span style='color: var(--primaryClr)'>Built with</span> React, React-redux, Typescript, and CSS. Used Node.js and socket.io for handling real-time user status and text messaging.",
      portfolioId: "chatApp",
      portfolioLiveAppLink: "https://real-time-chat-cc29e.web.app/",
      portfolioGitLink: "https://github.com/Soma-dev0808/react-typescript-chat",
      portfolioGifPath: "/assets/portfolioGif/chat_app.gif",
      portfolioImgPath: "/assets/portfolioImg/reactChatApp.png",
      skillUsed: ["React.js", "Typescript", "Redux", "Firebase", "Node.js"],
      duration: "2 months",
      impDescription: [
        "Used Redux toolkit to manage message and api status states.",
        "Used bindActionCreators to separate business logics and components as much as possible which keeps components look clean.",
        "Used Firestore to keep chat messages and user info.",
        "Used socket.io to store chat messages temporarily on backend side to avoid fetching messages every time when the firestore's data is changed.",
        "Socket.io is also used to keep user's online status in the same chat room.",
      ],
      difficultPart:
        "<span style='color: var(--primaryClr)'>To dynamically change hat room information</span> when the user switches rooms, I needed to think about how I could simply switch data. The chat page can be divided into three parts which are a sidebar we can check other chat rooms, a chat room header for displaying the chat room names and users who joined the room and a chat messages list. Data in these sections are fetched based on the chat room name, so I wanted to observe it and, when it changed, fetch the next room information. \n <span style='color: var(--primaryClr)'>For this solution,</span> I set a room name in the URL, and whenever the room name in the URL is changed, I made it to fetch data for the next page.",
      other:
        "If you want to try this applcation without registration, you can use the test accounts below. \n \n Account1 Email: <span style='color: var(--primaryClr)'>test1.test@test.com</span> Password: <span style='color: var(--primaryClr)'>test1test1234</span> \n Account2 Email: <span style='color: var(--primaryClr)'>test2.test@test.com</span> Password: <span style='color: var(--primaryClr)'>test2test1234</span>",
      prevPortfolio: { pid: "spotifyApp", pname: "Spotify App" },
      nextPortfolio: { pid: "concentrationApp", pname: "Concentration" },
    },
    {
      portfolioTitle: "Concentration",
      portfolioDesc:
        "<span style='color: var(--primaryClr)'>In a card game concentration,</span> you find all matches of 2 cards within a limit time to win the game. You can change the difficulty and card design by clicking buttons in a header. Once you complete the game within a given time, you can post your score online to compete with other players. The score data is stored in the firebase store. \n <span style='color: var(--primaryClr)'>This application is</span> created with React.ts, and Vite boosted development server.",
      portfolioId: "concentrationApp",
      portfolioLiveAppLink:
        "https://concentration-git-main-soma-dev0808.vercel.app/",
      portfolioGitLink: "https://github.com/Soma-dev0808/concentration",
      portfolioGifPath: "/assets/portfolioGif/concentration.gif",
      portfolioImgPath: "/assets/portfolioImg/concentration.png",
      isPosReverse: true,
      skillUsed: ["React.js", "Typescript", "Redux", "Firebase", "Vite"],
      duration: "2 weeks",
      impDescription: [
        "Used Vite to make the development experience better.",
        "Used Redux Toolkit to manage the state of the card game.",
        "Used bindActionCreators from Redux to separate business logic from components as much as possible.",
        "Integrated custom hooks to help observe game status.",
        "Used Firestore to store score data and user names for a ranking system.",
        "Implemented a function to change the difficulty and card design.",
        "Deployed on vercel which is easy to deploy frontend applications.",
      ],
      difficultPart:
        "<span style='color: var(--primaryClr)'>The rule for the card game</span> is pretty simple, but it was quite challenging for me to implement when it came to converting the card game rule into code. Especially, keeping card statuses, such as whether a card is flipped or not, was tough. \n <span style='color: var(--primaryClr)'>To overcome this,</span> I separated codes into small pieces as much as possible, which is more readable and easier to maintain so that I was able to avoid confusion while developing.",
      other: "",
      prevPortfolio: { pid: "chatApp", pname: "React Chat App" },
      nextPortfolio: { pid: "spotifyApp", pname: "Spotify App" },
    },
    {
      portfolioTitle: "Spotify App",
      portfolioDesc:
        "<span style='color: var(--primaryClr)'>Spotify clone application</span> in which you can actually play songs. Once you connect and login to Spotify, this application fetches playlists and songs from third-party Spotify api for you. \n This application is created with Next.js and Tailwind css.",
      portfolioId: "spotifyApp",
      portfolioLiveAppLink: "https://spotify-clone-gold-five.vercel.app/",
      portfolioGitLink: "https://github.com/Soma-dev0808/spotify-clone",
      portfolioGifPath: "/assets/portfolioGif/spotify_app.gif",
      portfolioImgPath: "/assets/portfolioImg/spotifyLike.png",
      skillUsed: ["React.js", "Typescript", "Recoil", "Next.js", "Tailwindcss"],
      duration: "2 weeks",
      impDescription: [
        'Used Next.js to implement SSG. Although actual Spotify might need SSR to integrate something like the "like song" feature, this application only focuses on how I can copy the layout of Spotify and the play songs part.',
        "Used Recoil to manage state. Since recoil is good at encapsulating business logic, I wanted to try this API.",
        "Used Tailwindcss which helps us to develop UI faster.",
      ],
      difficultPart:
        "<span style='color: var(--primaryClr)'>There was not really a hard part,</span> but I had to create a react custom hook to fetch previous and next songs' information to integrate playing them. \n <span style='color: var(--primaryClr)'>After fetching playlist information,</span> the custom hook will find current song information and then find the next and the previous songs' information. Once these songs' data are prepared, return them to where the custom hook is being called.",
      other:
        "You need <span style='color: var(--primaryClr)'>a premium account for spotify</span> to test the demo application. \n If you don't have it, you can also check the demo link below. \n\n <a href='https://user-images.githubusercontent.com/55787141/204393044-587d9ea4-b13c-483f-9012-f716845d40dd.mp4' target='_blank' rel='noreferrer'><span style='color: var(--primaryClr)'>Demo Video Link</span></a>",
      prevPortfolio: { pid: "concentrationApp", pname: "Concentration" },
      nextPortfolio: { pid: "chatApp", pname: "React Chat App" },
    },
  ],
  skillSets: [
    {
      skillId: "reactjs",
      skillImg: "/assets/reactjs.png",
      skillTitle: "React.js(Typescript)",
      skillDesc:
        "In most of projects, I have used React.js and have built web applications using class components or functional components. Also, I mainly use redux to manage states. Creating custom hooks is my fun part of web development. Currently, I'm studying typescript to work on a large scalable project in the future.",
    },
    {
      skillId: "nextjs",
      skillImg: "/assets/nextjs.png",
      skillTitle: "Next.js",
      skillDesc:
        "I have experience developing SaaS applications and e-commerce platforms using Next.js, with a focus on optimizing front-end performance. I've utilized React-query to prefetch data on the server side (SSR), accelerating data display and enhancing user experience.",
    },
    {
      skillId: "nodejs",
      skillImg: "/assets/nodejs.png",
      skillTitle: "Node.js",
      skillDesc:
        "I have created some web applications with node.js in my previous company. I have experience of integrating REST APIs, third-party authentication, and push notification api. Also installed nodaemon to keep the server system alive to run notification api.",
    },
    {
      skillId: "javascript",
      skillImg: "/assets/javascript.png",
      skillTitle: "Javascript",
      skillDesc:
        "Although I've been using React.js mainly for web development, javascript is also one of my powerful experiences. I have developed and had system update CRA application using javascript in my previous company. I also used jquery and AJAX to make a web page look richer.",
    },
  ],
};

export default portfolioData;
