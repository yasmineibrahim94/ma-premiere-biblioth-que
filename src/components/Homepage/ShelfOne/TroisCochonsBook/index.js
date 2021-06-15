import React from 'react';
import { Link } from 'react-router-dom';

const TroisCochonsBook = () => (
  <div className="createProfilBookContainer">
       <Link to="/les_3_petits_cochons" className="trois_cochons" type="button">
       <p>Les trois</p> <p>petits</p> <p>cochons</p>
        </Link>
  </div>
);

export default TroisCochonsBook;

