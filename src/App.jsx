import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./screens/Home"
import About from "./screens/About" 
import Service from "./screens/Services" 
import NewService from './screens/newServie';
import AboutLayout from './screens/AboutLayout';
import Notfond from './screens/notfound';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* <li><Link to="/about">Services</Link></li> */}

        </ul>
      </nav>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<AboutLayout/>}>
         <Route  index element={<About/>}/>         
         <Route  path=':id' element={<Service />}/>
         <Route  path='new' element={<NewService />}/> 
       </Route>
       <Route path='/*' element={<Notfond />}/>
       {/*  />
       <Route  />
       <Route  /> */}

       {/* <Route path='/services/:id' element={<Service />} /> */}
      </Routes>
    </>
  );
}

export default App;
