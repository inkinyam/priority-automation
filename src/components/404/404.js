import './404.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <> 
      <div className='container notfound'>
          <p>404</p>
          <small>PAGE NOT FOUND</small>
          <span class="circle big"></span>
          <span class="circle med"></span>
          <span class="circle small"></span>
          <Link to={-1} className='button button_contact'>Назад</Link>
      </div>
    </>
  )
}

export default NotFound;