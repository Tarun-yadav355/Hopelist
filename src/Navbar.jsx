// Navbar.jsx
import './Navbar.css';
import hplogo from './assets/hplogo.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className='bg'>
        <div className='logo'>
          <img src={hplogo} alt='logo' /> 
        </div>
        <div className='menu'>
          <ul>
            <li className='h1'>Home</li>
            <li className='h1'>About</li>
            <li className='h1'>Actions</li>
            <li className='h1'>Contact</li>
            <li>
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate('/donate')}
              >
                Donate
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
