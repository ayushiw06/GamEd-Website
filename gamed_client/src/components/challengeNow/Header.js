import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import logo from './logo.png'; // Adjust the path accordingly
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
  return (
    <div className='header'>
         {/* <h2>i m a header</h2> */}
         <IconButton ><PersonIcon fontSize='large' className='header_icon'/>
         </IconButton>
        <img className='header__logo' src={logo} alt=' '/>
        <IconButton><ChatIcon fontSize='large' className='header_icon'></ChatIcon></IconButton>
        
         </div>
    
  );
}

export default Header;


