import React from 'react';

import Header from '/src/components/Header';
import ShelfOne from '/src/components/Homepage/ShelfOne';
import ShelfThree from '/src/components/Homepage/ShelfThree';
import ShelfTwo from '/src/components/Homepage/ShelfTwo';
import Footer from '/src/components/Footer';
import './style.scss';
import '../Books/style.scss'
const Homepage = () => {
  return(
    <div className="myRecipe_container">
     <Header />
     <div className="librairy">
    <ShelfOne /> 
    <ShelfTwo />
    <ShelfThree /></div>
    <Footer />    

  </div>)
};

  


export default Homepage;
