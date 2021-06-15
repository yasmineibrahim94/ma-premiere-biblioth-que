import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => (
  <div className="allheader">
  <div className="header">
      <Link to="/"><h1 className='title'>Ma première Bibliothèque</h1></Link>
    
  </div><div className="whitePlace"></div></div>
);

export default Header;
