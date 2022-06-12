import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className='logo'>BooKies.Com</span>
        </Link>
        {user ? (
          <p>Welcome {user.username}</p>
        ) : (
          <div className='navItems'>
            {/* <button className='navButton'>Register</button> */}
            <button className='navButton' onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        )}

        {user ? (
          <button className='logoutBtn' onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
