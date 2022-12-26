import './Contacts.scss';
import Loader from 'react-loaders';

const Contacts = () => {
  return(
    <>
      <div className='container Contacts'>
        <div className='home'>Contacts</div>  
      </div>
      <Loader type="ball-pulse"/>
    </>
  )
}

export default Contacts;