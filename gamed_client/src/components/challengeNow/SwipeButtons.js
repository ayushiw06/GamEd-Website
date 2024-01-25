import React from 'react';
import "./SwipeButtons.css";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import StarRateIcon from '@mui/icons-material/StarRate';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';
import {handleReload} from './buttonfuctionality';


function SwipeButtons() {
  return (
    <div className='SwipeButtons'>
        <IconButton className='swipeButtons_left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_repeat' onClick={handleReload}>
            <ReplayIcon fontSize='large'/>
        </IconButton>
          <Link to='/topic/quiz' > 
        <IconButton className='swipeButtons_lighting'>
            <   FlashOnIcon fontSize='large'/> 
        </IconButton></Link>
    </div>
  )
}

export default SwipeButtons