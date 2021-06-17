import React, { useState } from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';

import Homepage from '../Homepage';
import ChaperonRouge from '../Books/ChaperonRouge';
import TroisCochons from '../Books/TroisCochons';
import BoucleDor from '../Books/BoucleDor';
import SourisVerte from '../Books/SourisVerte';
import Chevreaux from '../Books/Chevreaux';
import PouleRousse from '../Books/PouleRousse';
import VilainCanard from '../Books/VilainCanard';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/le_petit_chaperon_rouge" component={ChaperonRouge} />
        <Route path="/les_3_petits_cochons" component={TroisCochons} />
        <Route path="/boucle_d_or" component={BoucleDor} />
        <Route path="/une_souris_verte" component={SourisVerte} />
        <Route path="/les_7_petits_chevreaux" component={Chevreaux} />
        <Route path="/la_petite_poule_rousse" component={PouleRousse} />
        <Route path="/le_vilain_petit_canard" component={VilainCanard} />

     

      </Switch>
    </div>
  );
}

export default App;
