import Aside from './Aside';
import Main from './Main';
import About from './about'
import Home from './home'
import Contact from './contact'
import Resume from './resume'
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [a, setA] = useState(false)
  const hamburger =()=>{
    setA(!a)
  };
  return (
    <BrowserRouter> 
    <Routes> 
      <Route path="/" element={ <div className='row'>
      <Aside showOrHide={a} hamburger={hamburger}/>
      <Main hamburger={hamburger}/>   
    </div>}>
         <Route index element={<Home />} /> 
         <Route path="home" element={<Home/>} />
         <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="resume" element={<Resume/>} />
           <Route path="*" element={<h1>No page</h1>} />
            </Route> 
           </Routes> 
           </BrowserRouter>
   
  );
}

export default App;