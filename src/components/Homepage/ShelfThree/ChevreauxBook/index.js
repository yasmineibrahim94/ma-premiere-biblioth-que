import React from 'react';
import { Link } from 'react-router-dom';

const ChevreauBook = () => (
  <div className="createProfilBookstarter">
    <Link to="/les_7_petits_chevreaux" className="chevreau" type="button"><p>Le loup et </p><p>les septs</p><p>petits</p><p>chevreaux</p></Link>
  </div>
);

export default ChevreauBook;
