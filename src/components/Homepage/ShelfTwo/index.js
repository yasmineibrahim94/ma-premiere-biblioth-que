import React from 'react';
import SourisVerteBook from './SourisVerteBook';
import MechantLoupBook from './MechantLoupBook';
import VilainCanardBook from './VilainCanardBook';

const ShelfMyAccount = () => (
  <div className="ShelfMyAccount">
    <MechantLoupBook />
    <VilainCanardBook />
    <SourisVerteBook />
  </div>
);

export default ShelfMyAccount;
