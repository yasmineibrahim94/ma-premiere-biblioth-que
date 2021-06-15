import React from 'react';
import { Link } from 'react-router-dom';


function MechantLoupBook() {
  return (
      <div className="createProfilBookContainer">
         
         <Link to="/le_grand_mechant_loup" className="mechant_loup">      <p>Le grand</p> <p>méchant</p> <p>loup</p>
</Link>
              
      </div>
  );
}



export default MechantLoupBook;
