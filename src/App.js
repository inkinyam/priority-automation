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
import NotFound from './components/404/404';

function App() {
  return (
    <>
      <Routes>
        <Route path='*'         element={<Layout> <NotFound/> </Layout> } />
        <Route path='/'         element={<Layout> <Home/> </Layout> } />
        <Route path='/about'    element={<Layout> <About/> </Layout> } />
        <Route path='/services' element={<Layout> <Services/> </Layout> } />
        <Route path='/works'    element={<Layout> <Works/> </Layout> } />
        <Route path='/career'   element={<Layout> <Career/> </Layout> } />
        <Route path='/contact'  element={<Layout> <Contacts/> </Layout> } />
        <Route path='/middle'   element={<Layout> <Middle/> </Layout> } />
        <Route path='/junior'   element={<Layout> <Junior/> </Layout> } />
      </Routes>
    </>
  );
}

export default App;
