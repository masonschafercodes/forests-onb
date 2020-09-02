import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './App.css';
import Nav from './Components/Nav'
import ForestIntro from './Components/ForestIntro'
import ForestAbout from './Components/ForestAbout'

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="white" />
      <Nav />
      <ForestIntro forest_type='TROPICAL' />
      <ForestAbout 
      about="Tropical forests are characterized by the greatest diversity of species. They occur near the equator, within the area bounded by latitudes 23.5 degrees N and 23.5 degrees S. One of the major characteristics of tropical forests is their distinct seasonality: winter is absent, and only two seasons are present (rainy and dry). The length of daylight is 12 hours and varies little."
      link="https://i.ibb.co/5xBN3x7/tropical.jpg"
      />
      <ForestIntro forest_type='TEMPERATE' />
      <ForestAbout
      about="Temperate forests occur in eastern North America, northeastern Asia, and western and central Europe. Well-defined seasons with a distinct winter characterize this forest biome. Moderate climate and a growing season of 140-200 days during 4-6 frost-free months distinguish temperate forests."
      link="https://i.ibb.co/0QX3CsV/temperate.jpg"
      />
      <ForestIntro forest_type="JUNGLE" />
      <ForestAbout
      about="A jungle is land covered with dense forest and tangled vegetation, usually in tropical climates. Application of the term has varied greatly during the past recent centuries. Before the 1970s, tropical rainforests were generally referred to as jungles, but this terminology has fallen out of usage. "
      link="https://i.ibb.co/4PLwtCt/jungle.jpg" 
      />
      <ForestIntro forest_type="BOREAL" />
      <ForestAbout
      about="Boreal forests, or taiga, represent the largest terrestial biome. Occuring between 50 and 60 degrees north latitudes, boreal forests can be found in the broad belt of Eurasia and North America: two-thirds in Siberia with the rest in Scandinavia, Alaska, and Canada. Seasons are divided into short, moist, and moderately warm summers and long, cold, and dry winters. The length of the growing season in boreal forests is 130 days."
      link="https://i.ibb.co/fr1QCry/boreal.jpg" 
      />
    </div>
  );
}

export default App;
