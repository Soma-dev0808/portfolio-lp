import type { NextPage } from "next";
import Head from "next/head";
import AppLyout from "../components/AppLayout";

import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import CareerPath from "../components/CareerPath";
import Portfolios from "../components/Portfolios";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <AppLyout tabTitle="Soma Ikeda">
      {/* Introduction section */}
      <Intro />
      {/* About Me section */}
      <AboutMe />
      {/* Career Path */}
      <CareerPath />
      {/* Portfolio senction  */}
      <Portfolios />
      {/* Skills section */}
      <Skills />
      {/* Contact section */}
      <Contact />
    </AppLyout>
  );
};

export default Home;
