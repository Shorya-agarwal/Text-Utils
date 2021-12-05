// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const togglemode = ()=>{
    if(mode ==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#081849';

    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode ={mode} togglemode = {togglemode}/>
    <div className="container my-3">
      <TextForm heading="Enter your text here" mode ={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
