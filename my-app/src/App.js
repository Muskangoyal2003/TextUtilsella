import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
import About from './About';
import Alert from './Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setInterval(() => {
      setAlert(null);
    }, 3000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#172e46';
      showAlert('Dark mode has been enabled', 'success');
      //document.title = "TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title ="TextUtils is really amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title ="Install TextUtils";
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = "TextUtils - Light Mode"
    }
  }
  return (

    <Router>
      <Navbar title='TextUtilsella' text='ABOUT' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      < div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtilsella - Word Counter, Character Counter, Remove extra spaces " mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
