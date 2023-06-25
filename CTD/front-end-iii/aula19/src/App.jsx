import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    switch (language.id) {
      case "EN":
        setLanguage(languages.portugues);
        break;
      case "PTBR":
        setLanguage(languages.espanol);
        break;
      case "ES":
        setLanguage(languages.english);
        break;
      default:
        setLanguage(language.english);
        break;
    }
  }

  return (
    <div className="App">
      <LanguageContext.Provider value={{language, handleChangeLA}}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  )
}

export default App