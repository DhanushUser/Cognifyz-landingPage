import { useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Overview from './Components/Overview/Overview';
import Qualifi from './Components/Qualification/Qualifi';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';

function App() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <div>
      <Nav setIsContactVisible={setIsContactVisible} />
      <Hero />
      <Overview />
      <Qualifi setIsContactVisible={setIsContactVisible}/>
      <Footer />
      {isContactVisible && <Contact setIsContactVisible={setIsContactVisible} />}
    </div>
  );
}

export default App;
