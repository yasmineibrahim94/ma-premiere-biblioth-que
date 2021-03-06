import React from 'react';
import {Link} from 'react-router-dom'

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';
import img1 from '../../../assets/fonts/BoucleDor/img1.jpg';
import img2 from '../../../assets/fonts/BoucleDor/img2.jpg';
import img3 from '../../../assets/fonts/BoucleDor/img3.jpg';
import img4 from '../../../assets/fonts/BoucleDor/img4.jpg';
import img5 from '../../../assets/fonts/BoucleDor/img5.jpg';
import img6 from '../../../assets/fonts/BoucleDor/img6.jpg'; 

// basic cover
const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover-book1" ref={ref} data-density="hard">
    <div className="page-content">
      <h2>{props.children}</h2>
    </div>
  </div>
));

// basic page
const Page = React.forwardRef((props, ref) => (
  <div className="page" ref={ref}>
     <div className="page-content">
     <div className="page-image" />
      <div className="page-text">{props.children}</div> 
      <div className="page-footer">{props.number + 1}</div>
    </div>
  </div>
 ));

// page with changes
class Flip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  
  render() {
    const data = this.state;
    console.log(data);
    return (
      <div>
      <div className="stpageflip">
        <Header />

        <div className="buttons">
<Link to="/boucle_d_or" type="button" className="button-active">Version classique</Link>
<Link to="/boucle_d_or_syllabique" type="button" className="button">Version syllabique</Link>
</div>

        <HTMLFlipBook
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          width={500}
          height={750}
          drawShadow
          maxShadowOpacity={0.5}
          showCover
          mobileScrollSupport
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="flip-book"
          ref={(el) => (this.flipBook = el)}
        >

          <PageCover>Boucle d'or</PageCover>
      
          <Page number={0}>
          <div>
      
          <h4 className="page-header">Boucle d'or</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text">
              <p className="text-book">Il ??tai<span className="text-color">t</span> une foi<span className="text-color">s</span> une maman ours, un papa ours et leur peti<span className="text-color">t</span> ours qui habitai<span className="text-color">ent</span> une belle maison dan<span className="text-color">s</span> la for??t.</p>
              <p className="text-book">Un jour, maman ours pr??para une soupe tro<span className="text-color">p</span> chaude alor<span className="text-color">s</span> la petite famille parti<span className="text-color">t</span> se promener.</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Boucle d'or</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img2}/></div>
              <div className="page-text">
              <p className="text-book">Boucle d'or qui passai<span className="text-color">t</span> par l??, d??cida d'entrer pour se reposer un peu.</p>
              <p className="text-book">Elle vi<span className="text-color">t</span> troi<span className="text-color">s</span> chaise<span className="text-color">s</span>.</p>
              <p className="text-book">La premi??re ??tai<span className="text-color">t</span> tro<span className="text-color">p</span> grande, la deuxi??me ??tai<span className="text-color">t</span> un peu cass??<span className="text-color">e</span> mai<span className="text-color">s</span> la troisi??me plu<span className="text-color">s</span> petite ??tai<span className="text-color">t</span> parfaite!
              
              </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">Boucle d'or</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img3}/></div>
              <div className="page-text">
              <p className="text-book">Sur la table, elle vi<span className="text-color">t</span> troi<span className="text-color">s</span> bol<span className="text-color">s</span></p>
              <p className="text-book">Le gran<span className="text-color">d</span> bol ??tai<span className="text-color">t</span> tro<span className="text-color">p</span> chau<span className="text-color">d</span>, le bol moyen ??tai<span className="text-color">t</span> tro<span className="text-color">p</span> sal?? mai<span className="text-color">s</span> la soupe du peti<span className="text-color">t</span> bol ??tai<span className="text-color">t</span> parfaite et Boucle d'or la bu<span className="text-color">t</span> enti??remen<span className="text-color">t</span>.
             </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Boucle d'or</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img4}/></div>
              <div className="page-text">
              <p className="text-book">Pui<span className="text-color">s</span> fatigu??<span className="text-color">e</span>, elle alla dans la chambre.</p>
              <p className="text-book">Elle se coucha sur le gran<span className="text-color">d</span> li<span className="text-color">t</span> mai<span className="text-color">s</span> il ??tai<span className="text-color">t</span> tro<span className="text-color">p</span> dur, le li<span className="text-color">t</span> moyen ??tai<span className="text-color">t</span> tro<span className="text-color">p</span> mou mai<span className="text-color">s</span> le peti<span className="text-color">t</span>, lui, ??tai<span className="text-color">t</span> parfai<span className="text-color">t</span>! Et elle s'endormi<span className="text-color">t</span>.
             </p>
              
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Boucle d'or</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img5}/></div>
              <div className="page-text">
              <p className="text-book">
              Quan<span className="text-color">d</span> les troi<span className="text-color">s</span> ours revinre<span className="text-color">nt</span> dan<span className="text-color">s</span> leur maison, il<span className="text-color">s</span> fure<span className="text-color">nt</span> tr??<span className="text-color">s</span> ??tonn??<span className="text-color">s</span>. </p>
              <p className="text-book">Quelqu'un s'??tai<span className="text-color">t</span> assi<span className="text-color">s</span> sur la chaise de Peti<span className="text-color">t</span> Ours!</p>
              <p className="text-book">Quelqu'un avai<span className="text-color">t</span> mang?? la soupe de Peti<span className="text-color">t</span> Ours !</p>
              <p className="text-book">Quelqu'un s'est couch?? dans le li<span className="text-color">t</span> de Peti<span className="text-color">t</span> Ours !
              </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={5}>
          <div>
      
          <h4 className="page-header">Boucle d'or</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img6}/></div>
              <div className="page-text">
              <p className="text-book">
               En voyan<span className="text-color">t</span> les troi<span className="text-color">s</span> ours, Boucle d'or eu<span className="text-color">t</span> tr??<span className="text-color">s</span> peur !</p>
               <p className="text-book">
 Elle sorti<span className="text-color">t</span> de la maison en couran<span className="text-color">t</span> et s'enfui<span className="text-color">t</span> dan<span className="text-color">s</span> la for??t.
              
              </p>
            </div>

</div>
    </div>
          </Page>

         

          <PageCover>Fin</PageCover>

        </HTMLFlipBook>
        <Footer />
      </div>
</div>
    );
  }
}

export default Flip;
