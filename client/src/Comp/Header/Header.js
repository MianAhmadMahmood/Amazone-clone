import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../Firebase'; // Make sure to import auth from Firebase


const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut(); 
    }
  }; 

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
      </Link>

      <div className='header_search'>
        <input className='header_Search_Input' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header-nav'>
        <Link to='/login'> 
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionlineone'>
              Hello {!user ?'Guest': user.email  }
            </span>
            <span className='header_optionlinetwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to='/oders'>
        <div className='header_option'>
          <span className='header_optionlineone'>
            Returns
          </span>
          <span className='header_optionlinetwo'>
            Orders
          </span>
        </div>

        </Link>
      
        <div className='header_option'>
          <span className='header_optionlineone'>
            Your
          </span>
          <span className='header_optionlinetwo'>
            Prime
          </span>
        </div>
        <Link to='/checkout'>
          <div className='header_optionbasket'>
            <ShoppingBasketIcon />
            <span className='header_optionlinetwo header_BasketCount'>
              {basket ? basket.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
