import React from 'react';
import Intro from './components/Intro';
import MyServices from './components/MyServices';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Intro />
      <MyServices />
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
