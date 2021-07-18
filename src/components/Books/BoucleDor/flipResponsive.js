import React from 'react';

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
class FlipResponsive extends React.Component {
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
        <HTMLFlipBook
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          width={315}
          height={400}
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
              <img className="img-book-responsive" src={img1}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Il étai<span className="text-color">t</span> une foi<span className="text-color">s</span> une maman ours, un papa ours et leur peti<span className="text-color">t</span> ours qui habitai<span className="text-color">ent</span> une belle maison dan<span className="text-color">s</span> la forêt.</p>
              <p className="text-book-responsive">Un jour, maman ours prépara une soupe tro<span className="text-color">p</span> chaude alor<span className="text-color">s</span> la petite famille parti<span className="text-color">t</span> se promener.</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Boucle d'or</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img2}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Boucle d'or qui passai<span className="text-color">t</span> par là, décida d'entrer pour se reposer un peu.</p>
              <p className="text-book-responsive">Elle vi<span className="text-color">t</span> troi<span className="text-color">s</span> chaise<span className="text-color">s</span>.</p>
              <p className="text-book-responsive">La première étai<span className="text-color">t</span> tro<span className="text-color">p</span> grande, la deuxième étai<span className="text-color">t</span> un peu cassé<span className="text-color">e</span> mai<span className="text-color">s</span> la troisième plu<span className="text-color">s</span> petite étai<span className="text-color">t</span> parfaite!
              
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
              <img className="img-book-responsive" src={img3}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Sur la table, elle vi<span className="text-color">t</span> troi<span className="text-color">s</span> bol<span className="text-color">s</span></p>
              <p className="text-book-responsive">Le gran<span className="text-color">d</span> bol étai<span className="text-color">t</span> tro<span className="text-color">p</span> chau<span className="text-color">d</span>, le bol moyen étai<span className="text-color">t</span> tro<span className="text-color">p</span> salé mai<span className="text-color">s</span> la soupe du peti<span className="text-color">t</span> bol étai<span className="text-color">t</span> parfaite et Boucle d'or la bu<span className="text-color">t</span> entièremen<span className="text-color">t</span>.
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
              <img className="img-book-responsive" src={img4}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Pui<span className="text-color">s</span> fatigué<span className="text-color">e</span>, elle alla dans la chambre.</p>
              <p className="text-book-responsive">Elle se coucha sur le gran<span className="text-color">d</span> li<span className="text-color">t</span> mai<span className="text-color">s</span> il étai<span className="text-color">t</span> tro<span className="text-color">p</span> dur, le li<span className="text-color">t</span> moyen étai<span className="text-color">t</span> tro<span className="text-color">p</span> mou mai<span className="text-color">s</span> le peti<span className="text-color">t</span>, lui, étai<span className="text-color">t</span> parfai<span className="text-color">t</span>! Et elle s'endormi<span className="text-color">t</span>.
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
              <img className="img-book-responsive" src={img5}/></div>
              <div className="page-text">
              <p className="text-book-responsive">
              Quan<span className="text-color">d</span> les troi<span className="text-color">s</span> ours revinre<span className="text-color">nt</span> dan<span className="text-color">s</span> leur maison, il<span className="text-color">s</span> fure<span className="text-color">nt</span> trè<span className="text-color">s</span> étonné<span className="text-color">s</span>. </p>
              <p className="text-book-responsive">Quelqu'un s'étai<span className="text-color">t</span> assi<span className="text-color">s</span> sur la chaise de Peti<span className="text-color">t</span> Ours!</p>
              <p className="text-book-responsive">Quelqu'un avai<span className="text-color">t</span> mangé la soupe de Peti<span className="text-color">t</span> Ours !</p>
              <p className="text-book-responsive">Quelqu'un s'est couché dans le li<span className="text-color">t</span> de Peti<span className="text-color">t</span> Ours !
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
              <img className="img-book-responsive" src={img6}/></div>
              <div className="page-text">
              <p className="text-book-responsive">
               En voyan<span className="text-color">t</span> les troi<span className="text-color">s</span> ours, Boucle d'or eu<span className="text-color">t</span> trè<span className="text-color">s</span> peur !</p>
               <p className="text-book-responsive">
 Elle sorti<span className="text-color">t</span> de la maison en couran<span className="text-color">t</span> et s'enfui<span className="text-color">t</span> dan<span className="text-color">s</span> la forêt.
              
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

export default FlipResponsive;
