
import './App.css';
import Navbar from './componets/Navbar';
import Alart from './componets/Alert';
import TextForm from './componets/TextForm';
import { useState } from 'react';



function App() {

  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "gray"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  
  return (
    <>
    <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
    <Alart/>
    <div className="container">
     <TextForm heading="enter the text to analyze" /> 
    </div>
    </>
  );
}

export default App;
