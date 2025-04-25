import React from 'react';
import Header from './components/Header';
import SurfaceLayer from './components/SurfaceLayer';
import ShallowLayer from './components/ShallowLayer';
import ModerateLayer from './components/ModerateLayer';
import DeepLayer from './components/DeepLayer';
import AbyssLayer from './components/AbyssLayer';
// import DepthMarker from './components/DeepLayer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <DepthMarker /> */}
      <div className="parallax-container" id="ocean-container">
        <SurfaceLayer />
        <ShallowLayer />
        <ModerateLayer />
        <DeepLayer />
        <AbyssLayer />
      </div>
      <BackToTop />
    </>
  );
};

export default App;