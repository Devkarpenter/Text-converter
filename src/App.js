
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
      document.body.style.backgroundColor = "#001e1e"
      document.body.style.color = "white"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "#d5dbdb"
      document.body.style.color = "black"
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
