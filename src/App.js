// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#081849';
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alerts alert={alert} />
        <div className="container my-3">
              <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} />
        </div>
    </>
  );
}

export default App;
