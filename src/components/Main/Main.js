import Header from '../Header/Header';
import Lead from '../Lead/Lead';
import AboutUs from '../AboutUs/AboutUs';
import Feautures from '../Feautures/Feautures';
import Statistic from '../Statistic/Statistic';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';


const Main = () => {
  return(
    <>
      <Header/>
      <main>
        <Lead />
        <AboutUs/>
        <Feautures/>
        <Statistic/>
        <Form/>
      </main>
    <Footer/>
   </>

  )
}

export default Main;