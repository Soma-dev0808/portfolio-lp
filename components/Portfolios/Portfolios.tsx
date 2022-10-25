import React from 'react';
import Image from 'next/image';
import indexStyles from '../../styles/index.module.css';
import portfolioStyles from '../../styles/portfolio.module.css';
import introStyles from '../../styles/intro.module.css';

// Portfolio senction 
const Portfolios = () => {
    return (
        <section
            id="portfolios"
            className={`${indexStyles.sections} ${introStyles.imageBackground}`}
        >
            <div className={indexStyles.wrapper}>
                <h2 className={indexStyles.sectionTitle}>Portfolio</h2>

                <div className={portfolioStyles.portfolios}>
                    {/*  Portfolio 1 */}
                    <div className={portfolioStyles.portfolio}>
                        <a className={portfolioStyles.portfolioLink}
                            href="https://github.com/Soma-dev0808/react-typescript-chat"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className={portfolioStyles.portfolioTitle}>
                                React Ahat App
                                <span className={portfolioStyles.linkIcon}>
                                    <Image
                                        src="/assets/link_icon.png"
                                        alt="link icon"
                                        width={15}
                                        height={15}
                                        layout='fixed'
                                    />
                                </span>
                            </h3>
                        </a>
                        <div className={portfolioStyles.skillUsedContainer}>
                            <span className={portfolioStyles.skillUsed}>React.js</span>
                            <span className={portfolioStyles.skillUsed}>Typescript</span>
                            <span className={portfolioStyles.skillUsed}>Redux</span>
                            <span className={portfolioStyles.skillUsed}>Firebase</span>
                            <span className={portfolioStyles.skillUsed}>Node.js</span>
                        </div>

                        <a className={portfolioStyles.portfolioLink} href="https://github.com/Soma-dev0808/react-typescript-chat" target="_blank" rel="noreferrer">
                            <p className={portfolioStyles.appDesc}>Real time chat app allows user to communicate with other users and check realtime status
                                of other users in the same chat room. You can create or choose a chat room as well.
                                <br /> Built with React, React-redux, Typescript, and CSS.
                                Used Node.js and socket.io for handling real time user status and text messaging.
                            </p>
                            <div className={portfolioStyles.portfolioGifContainer}>
                                <Image
                                    src="/assets/chat_app.gif"
                                    alt="chat app"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </a>
                    </div>

                    {/* Portfolio 2  */}
                    <div className={portfolioStyles.portfolio}>
                        <a className={portfolioStyles.portfolioLink} href="https://github.com/Soma-dev0808/concentration/" target="_blank" rel="noreferrer">
                            <h3 className={portfolioStyles.portfolioTitle}>
                                Concentration
                                <span className={portfolioStyles.linkIcon}>
                                    <Image
                                        src="/assets/link_icon.png"
                                        alt="link icon"
                                        className={indexStyles.linkIcon}
                                        width={15}
                                        height={15}
                                        layout='fixed'
                                    />
                                </span>
                            </h3>
                        </a>
                        <div className={portfolioStyles.skillUsedContainer}>
                            <span className={portfolioStyles.skillUsed}>React.js</span>
                            <span className={portfolioStyles.skillUsed}>Typescript</span>
                            <span className={portfolioStyles.skillUsed}>Redux</span>
                            <span className={portfolioStyles.skillUsed}>Firebase</span>
                            <span className={portfolioStyles.skillUsed}>Vite</span>
                        </div>
                        <a className={portfolioStyles.portfolioLink} href="https://github.com/Soma-dev0808/concentration/" target="_blank" rel="noreferrer">
                            <p className={portfolioStyles.appDesc}>
                                A card game concentration. Within the limit time, you find all matches of 2 cards to win the game.
                                You can change a difficulty and card design by clicking buttons in the header. Once you completed the game within a given time, you can post your score online to compete with other players.
                                The score data is stored in firebase store.
                                <br />Created by React.ts and boosted development server by Vite.
                            </p>

                            <div className={portfolioStyles.portfolioGifContainer}>
                                <Image
                                    src="/assets/concentration.gif"
                                    alt="weather app"
                                    width={500}
                                    height={400}
                                />
                            </div>
                        </a>
                    </div>

                    {/* Portfolio 3 */}
                    <div className={portfolioStyles.portfolio}>
                        <a className={portfolioStyles.portfolioLink} href="https://github.com/Soma-dev0808/spotify-clone" target="_blank" rel="noreferrer">
                            <h3 className={portfolioStyles.portfolioTitle}>
                                Spotify App
                                <span className={portfolioStyles.linkIcon}>
                                    <Image
                                        src="/assets/link_icon.png"
                                        alt="link icon"
                                        className={indexStyles.linkIcon}
                                        width={15}
                                        height={15}
                                        layout='fixed'
                                    />
                                </span>
                            </h3>
                        </a>
                        <div className={portfolioStyles.skillUsedContainer}>
                            <span className={portfolioStyles.skillUsed}>React.js</span>
                            <span className={portfolioStyles.skillUsed}>Typescript</span>
                            <span className={portfolioStyles.skillUsed}>Recoil</span>
                            <span className={portfolioStyles.skillUsed}>Next.js</span>
                            <span className={portfolioStyles.skillUsed}>Tailwindcss</span>
                        </div>
                        <a className={portfolioStyles.portfolioLink} href="https://github.com/Soma-dev0808/spotify-clone" target="_blank" rel="noreferrer">
                            <p className={portfolioStyles.appDesc}>
                                Spotify clone application which you can actually play a song. Fetch data for playlist and songs from 3rd party Spotify api.
                                <br />Created with Next.js and Tailwind css.
                            </p>
                            <div className={portfolioStyles.portfolioGifContainer}>
                                <Image
                                    src="/assets/spotify_app.gif"
                                    alt="spotify app"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </a>
                    </div>

                    {/* Portfolio 4  */}
                    <div className={portfolioStyles.portfolio}>
                        <a className={portfolioStyles.portfolioLink} href="https://github.com/Soma-dev0808/weather-app" target="_blank" rel="noreferrer">
                            <h3 className={portfolioStyles.portfolioTitle}>
                                Weather App
                                <span className={portfolioStyles.linkIcon}>
                                    <Image
                                        src="/assets/link_icon.png"
                                        alt="link icon"
                                        className={indexStyles.linkIcon}
                                        width={15}
                                        height={15}
                                        layout='fixed'
                                    />
                                </span>
                            </h3>
                        </a>
                        <div className={portfolioStyles.skillUsedContainer}>
                            <span className={portfolioStyles.skillUsed}>React.js</span>
                            <span className={portfolioStyles.skillUsed}>Redux</span>
                            <span className={portfolioStyles.skillUsed}>Node.js</span>
                            <span className={portfolioStyles.skillUsed}>Express</span>
                        </div>
                        <a className={portfolioStyles.portfolioLink} href="https://github.com/Soma-dev0808/weather-app" target="_blank" rel="noreferrer">

                            <p className={portfolioStyles.appDesc}>
                                This application allows a user to check the current weather, and notifies a user about
                                the weather information by LINENotify at a specific time everyday if it&apos;s configured.
                                To be able to receive notification, you have to register/login to this app.
                                You can see weather information in browser by inputting zipcode without registration or
                                login.
                            </p>

                            <div className={portfolioStyles.portfolioGifContainer}>
                                <Image
                                    src="/assets/weather_app.gif"
                                    alt="weather app"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolios;