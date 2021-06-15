import React, { useState } from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';

import Homepage from '../Homepage';
import ChaperonRouge from '../Books/ChaperonRouge';
import TroisCochons from '../Books/TroisCochons';
import MechantLoup from '../Books/MechantLoup';
/* import MyRecipes from '../Books/MyRecipes';
import CreateProfil from '../CreateProfil';
import LoginForm from '../LoginForm'; */

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/le_petit_chaperon_rouge" component={ChaperonRouge} />
        <Route path="/les_3_petits_cochons" component={TroisCochons} />
        <Route path="/le_grand_mechant_loup" component={MechantLoup} />
       {/*  <Route path="/create-profil" component={CreateProfil} />
        <Route path="/login" component={LoginForm} />
        <Route path="/user/recipes" component={MyRecipes} /> */}

      </Switch>
    </div>
  );
}

export default App;
