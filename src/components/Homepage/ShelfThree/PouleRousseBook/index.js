import React from 'react';
import { Link } from 'react-router-dom';

const PouleRousseBook = () => (
  <div className="createProfilBookContainer">
       <Link to="/la_petite_poule_rousse" className="poule-rousse" type="button"><p>La petite</p><p>poule</p><p>rousse</p></Link>
  </div>
);

export default PouleRousseBook;
