import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Team from './Components/Team/Team';
import Effeciency from './Components/Effeciency/Effeciency';
import Intelligence from './Components/Intelligence/Intelligence';
import Energy from './Components/Energy/Energy';
import Method from './Components/Methods/Method';
import Setting from './Components/Settings/Setting';
import Faqs from './Components/Faqs/Faqs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import "@fontsource/poppins"; 
import "@fontsource/poppins/600.css"; 

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <Landing />
      <Team/>
      <Effeciency/>
      <Intelligence/>
      <Energy/>
      <Method/>
      <Setting/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
