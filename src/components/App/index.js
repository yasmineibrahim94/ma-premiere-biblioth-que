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
import HanselGretel from '../Books/HanselGretel';
import SyllabiqueSouris from "../Books/SourisVerte/flipSyllabique";
import SyllabiqueTroisCochons from "../Books/TroisCochons/flipSyllabique";
import SyllabiquePoule from "../Books/PouleRousse/flipSyllabique";
import SyllabiqueHansel from "../Books/HanselGretel/flipSyllabique";
import SyllabiqueChevreaux from "../Books/Chevreaux/flipSyllabique";
import SyllabiqueChaperon from "../Books/ChaperonRouge/flipSyllabique";
import SyllabiqueBoucle from "../Books/BoucleDor/flipSyllabique";



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/le_petit_chaperon_rouge" component={ChaperonRouge} />
        <Route path="/le_petit_chaperon_rouge_syllabique" component={SyllabiqueChaperon} />
        <Route path="/les_3_petits_cochons" component={TroisCochons} />
        <Route path="/les_3_petits_cochons_syllabique" component={SyllabiqueTroisCochons} />
        <Route path="/boucle_d_or" component={BoucleDor} />
        <Route path="/boucle_d_or_syllabique" component={SyllabiqueBoucle} />
        <Route path="/une_souris_verte" component={SourisVerte} />
        <Route path="/une_souris_verte_syllabique" component={SyllabiqueSouris} />
        <Route path="/les_7_petits_chevreaux" component={Chevreaux} />
        <Route path="/les_7_petits_chevreaux_syllabique" component={SyllabiqueChevreaux} />
        <Route path="/la_petite_poule_rousse" component={PouleRousse} />
        <Route path="/la_petite_poule_rousse_syllabique" component={SyllabiquePoule} />
        <Route path="/hansel_et_gretel" component={HanselGretel} />
        <Route path="/hansel_et_gretel_syllabique" component={SyllabiqueHansel} />


     

      </Switch>
    </div>
  );
}

export default App;
