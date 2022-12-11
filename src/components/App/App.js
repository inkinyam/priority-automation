import './App.scss';


import Header from '../Header/Header';
import Lead from '../Lead/Lead';
import AboutUs from '../AboutUs/AboutUs';
import Feautures from '../Feautures/Feautures';
import Statistic from '../Statistic/Statistic';
import FAQ from '../FAQ/FAQ';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>

        <main>
          <Lead />
          <AboutUs/>
          <Feautures/>
          <Statistic/>
          <FAQ/>
          <Form/>
        </main>
        
        <Footer/>
    </div>
  );
}

export default App;
