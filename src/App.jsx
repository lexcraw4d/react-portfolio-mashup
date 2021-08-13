import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/Navigation';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';


function App() {
  const [ currentPage, setCurrentPage ] = useState('About');
  
  const renderPage = () => {
    
    switch (currentPage) {
      
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
   
  };

 
 return (
    <div className="App">
      <Navigation
      currentPage = {currentPage} 
      setCurrentPage = {setCurrentPage}/>
      {/* <Header /> */}
      <div>{renderPage()}</div>
      <Footer />
    </div>
    
  );
}
export default App;
