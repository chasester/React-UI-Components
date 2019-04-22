
import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'

const App = () => {
  var imgurl = 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png';
  return (
    
    <div class="container">
    <ImageThumbnail imgscr={imgurl} />
      <div>
      <HeaderContainer />
      <CardContainer />
      <FooterContainer comments="10" likes="2k" reposts="5" messages="20"  />
      </div>
    </div>
  );
};

export default App;