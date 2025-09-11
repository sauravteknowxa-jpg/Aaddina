import { Outlet } from 'react-router';
import Navbar from './Navbar';
import './style.css';

function Addina(){
    return(
        <>
              
          <Navbar />
          <Outlet />
              
        </>
    )
}
export default Addina;