import React from 'react';

// composants import
import Flip from './flip';
import FlipResponsive from './flipResponsive';

// style import
import '../style.scss';

const SourisVerte = () => (
  <div><div className="ListByFlipResponsiv"><FlipResponsive /></div>
  <div className="ListByFlip"> <Flip /> </div>
  </div>
);

export default SourisVerte;
