import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Works from './components/Works/Works';
import Career from './components/Career/Career';
import Contacts from './components/Contacts/Contacts';
import Middle from './components/Vacancy/Middle';
import Junior from './components/Vacancy/Junior';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'           element={<Layout />}>
          <Route index            element={<Home/>}></Route> 
          <Route path='/about'    element={<About/>}></Route> 
          <Route path='/services' element={<Services/>}></Route> 
          <Route path='/works'    element={<Works/>}></Route> 
          <Route path='/career'   element={<Career/>}></Route> 
          <Route path='/contact'  element={<Contacts/>}></Route> 
          <Route path='/middle'   element={<Middle/>}></Route> 
          <Route path='/junior'   element={<Junior/>}></Route> 
         
        </Route> 
      </Routes>
    </>
  );
}

export default App;
