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
class SyllabiqueBoucle extends React.Component {
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
      <div className="myRecipe_container">
      <div className="stpageflip">
        <Header />

        <div className="buttons">
<Link to="/boucle_d_or" type="button" className="button">Version classique</Link>
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
          disableFlipByClick // désactivation au click sur la page
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
              <p className="text-book">Il é-tai<span className="text-color">t</span> une foi<span className="text-color">s</span> une ma-man ours, un pa-pa ours et leur pe-ti<span className="text-color">t</span> ours qui ha-bi-tai<span className="text-color">ent</span> une bel-le mai-son dan<span className="text-color">s</span> la fo-rêt.</p>
              <p className="text-book">Un jour, ma-man ours pré-pa-ra une sou-pe tro<span className="text-color">p</span> chau-de a-lor<span className="text-color">s</span> la pe-ti-te fa-mil-le par-ti<span className="text-color">t</span> se pro-me-ner.</p>
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
              <p className="text-book">Bou-cle d'or qui pas-sai<span className="text-color">t</span> par là, dé-ci-da d'en-trer pour se re-po-ser un peu.</p>
              <p className="text-book">Elle vi<span className="text-color">t</span> troi<span className="text-color">s</span> chai-se<span className="text-color">s</span>.</p>
              <p className="text-book">La pre-mi-ère é-tai<span className="text-color">t</span> tro<span className="text-color">p</span> gran-de, la deu-xi-ème é-tai<span className="text-color">t</span> un peu cas-sé<span className="text-color">e</span> mai<span className="text-color">s</span> la troi-si-ème plu<span className="text-color">s</span> pe-ti-te é-tai<span className="text-color">t</span> par-fai-te!
              
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
              <p className="text-book">Sur la ta-ble, elle vi<span className="text-color">t</span> troi<span className="text-color">s</span> bol<span className="text-color">s</span></p>
              <p className="text-book">Le gran<span className="text-color">d</span> bol é-tai<span className="text-color">t</span> tro<span className="text-color">p</span> chau<span className="text-color">d</span>, le bol moyen é-tai<span className="text-color">t</span> tro<span className="text-color">p</span> sa-lé mai<span className="text-color">s</span> la sou-pe du pe-ti<span className="text-color">t</span> bol é-tai<span className="text-color">t</span> par-fai-te et Bou-cle d'or la bu<span className="text-color">t</span> en-tiè-re-men<span className="text-color">t</span>.
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
              <p className="text-book">Pui<span className="text-color">s</span> fa-ti-gué<span className="text-color">e</span>, elle al-la dans la cham-bre.</p>
              <p className="text-book">Elle se cou-cha sur le gran<span className="text-color">d</span> li<span className="text-color">t</span> mai<span className="text-color">s</span> il é-tai<span className="text-color">t</span> tro<span className="text-color">p</span> dur, le li<span className="text-color">t</span> moyen é-tai<span className="text-color">t</span> tro<span className="text-color">p</span> mou mai<span className="text-color">s</span> le pe-ti<span className="text-color">t</span>, lui, é-tai<span className="text-color">t</span> par-fai<span className="text-color">t</span>! Et elle s'en-dor-mi<span className="text-color">t</span>.
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
              Quan<span className="text-color">d</span> les troi<span className="text-color">s</span> ours re-vin-re<span className="text-color">nt</span> dan<span className="text-color">s</span> leur mai-son, il<span className="text-color">s</span> fu-re<span className="text-color">nt</span> trè<span className="text-color">s</span> é-ton-né<span className="text-color">s</span>. </p>
              <p className="text-book">Quel-qu'un s'é-tai<span className="text-color">t</span> as-si<span className="text-color">s</span> sur la chai-se de Pe-ti<span className="text-color">t</span> Ours!</p>
              <p className="text-book">Quel-qu'un a-vai<span className="text-color">t</span> man-gé la sou-pe de Pe-ti<span className="text-color">t</span> Ours !</p>
              <p className="text-book">Quel-qu'un s'est cou-ché dans le li<span className="text-color">t</span> de Pe-ti<span className="text-color">t</span> Ours !
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
               En voyan<span className="text-color">t</span> les troi<span className="text-color">s</span> ours, Bou-cle d'or eu<span className="text-color">t</span> trè<span className="text-color">s</span> peur !</p>
               <p className="text-book">
 Elle sor-ti<span className="text-color">t</span> de la mai-son en cou-ran<span className="text-color">t</span> et s'en-fui<span className="text-color">t</span> dan<span className="text-color">s</span> la fo-rêt.
              
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

export default SyllabiqueBoucle;
