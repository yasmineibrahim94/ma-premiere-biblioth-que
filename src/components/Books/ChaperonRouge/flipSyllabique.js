import React from 'react';
import {Link} from 'react-router-dom'

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';
import img1 from '../../../assets/fonts/ChaperonRouge/img1.jpg';
import img2 from '../../../assets/fonts/ChaperonRouge/img2.jpg';
import img3 from '../../../assets/fonts/ChaperonRouge/img3.jpg';
import img4 from '../../../assets/fonts/ChaperonRouge/img4.jpeg';
import img5 from '../../../assets/fonts/ChaperonRouge/img5.jpeg';
import img6 from '../../../assets/fonts/ChaperonRouge/img6.jpeg'; 
import img7 from '../../../assets/fonts/ChaperonRouge/img7.jpeg';
import img8 from '../../../assets/fonts/ChaperonRouge/img8.jpg';
import img9 from '../../../assets/fonts/ChaperonRouge/img9.jpg';
import img10 from '../../../assets/fonts/ChaperonRouge/img10.jpg';

// basic cover
const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover-book7" ref={ref} data-density="hard">
    <div className="page-content">
      <h2>{props.children}</h2>
    </div>
  </div>
));

// basic page
const Page = React.forwardRef((props, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content">
     <div className="page-text">{props.children}</div>
      <div className="page-footer">{props.number + 1}</div>
    </div>
  </div>
));

// page with changes
class SyllabiqueChaperon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }
  
  render() {  const data = this.state;
    console.log(data);
    return (
      <div>
      <div className="stpageflip">
        <Header />

        <div className="buttons">
<Link to="/le_petit_chaperon_rouge" type="button" className="button">Version classique</Link>
<Link to="/le_petit_chaperon_rouge_syllabique" type="button" className="button-active">Version syllabique</Link>
</div>

        <HTMLFlipBook
          minWidth={315}
         maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          width={500}
          height={700}
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
        

          <PageCover>Le Petit Chaperon Rouge</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text">
              <p className="text-book">Il é-tai<span className="text-color">t</span> une foi<span className="text-color">s</span> une pe-ti-te fil-le que tou<span className="text-color">t</span> le mon-de ap-pe-lai<span className="text-color">t</span> le Pe-ti<span className="text-color">t</span> Cha-pe-ron Rou-ge</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>
              <div className="page-img">
              <img className="img-book" src={img2}/></div>
              <div className="page-text">
              <p className="text-book">
                Un jour sa mè-re lui don-na un pa-ni-er : 
                Mè-re-gran<span className="text-color">d</span> est ma-la-de, va lui por-ter cet-te ga-let-te et ce pe-ti<span className="text-color">t</span> po<span className="text-color">t</span> de beur-re</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img3}/></div>
              <div className="page-text">
              <p className="text-book">Le Pe-ti<span className="text-color">t</span> Cha-pe-ron Rou-ge se mi<span className="text-color">t</span> en che-min.
              Mai<span className="text-color">s</span> un lou<span className="text-color">p</span> af-fa-mé l'ar-rê-ta :</p>
              <p className="text-book">- Où va<span className="text-color">s</span> tu ain-si ?</p>
              <p className="text-book">- Chez mè-re-gran<span className="text-color">d</span>, lui ré-pon-di<span className="text-color">t</span>-elle</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img4}/></div>
              <div className="page-text">
              <p className="text-book">Le lou<span className="text-color">p</span> ar-ri-va le pre-mi-er et frap-pa à la por-te.</p>
              <p className="text-book">- Qui est là? , de-man-da Mè-re-gran<span className="text-color">d</span></p>
              <p className="text-book">- C'est moi le Pe-ti<span className="text-color">t</span> Cha-pe-ron Rou-ge, ré-pon-di<span className="text-color">t</span>-il en dé-gui-san<span className="text-color">t</span> sa voi<span className="text-color">x</span>.</p>
              <p className="text-book">- Ti-re la che-vil-let-te, la bo-bi-net-te cher-ra.</p>
              
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img5}/></div>
              <div className="page-text">
              <p className="text-book">La por-te s'ou-vri<span className="text-color">t</span> et le lou<span className="text-color">p</span> se je-ta sur Mè-re-gran<span className="text-color">d</span>.</p>
                <p className="text-book">Pui<span className="text-color">s</span> il pri<span className="text-color">t</span> sa pla-ce dan<span className="text-color">s</span> son li<span className="text-color">t</span>.</p>
              <p className="text-book">C'est a-lor<span className="text-color">s</span> qu'on frap-pa à la por-te.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={5}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img6}/></div>
              <div className="page-text"><p className="text-book">
                - Qui est là? , de-man-da le lou<span className="text-color">p</span> d'une voi<span className="text-color">x</span> dou-ce.</p>
                <p className="text-book">
                - C'est le Pe-ti<span className="text-color">t</span> Cha-pe-ron Rou-ge! Je vou<span className="text-color">s</span> ap-por-te une ga-let-te et un po<span className="text-color">t</span> de beur-re.</p>
                <p className="text-book">
                - Ti-re la che-vil-let-te, la bo-bi-net-te cher-ra.
              </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={6}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img7}/></div>
              <div className="page-text">
              <p className="text-book">En re-gar-dan<span className="text-color">t</span> Mè-re-gran<span className="text-color">d</span> de plu<span className="text-color">s</span> prè<span className="text-color">s</span>, la fil-let-te s'é-ton-na :</p>
              <p className="text-book">
                - Mè-re-gran<span className="text-color">d</span> que vou<span className="text-color">s</span> a-vez de gran-de<span className="text-color">s</span> o-reil-le<span className="text-color">s </span>!</p>
                <p className="text-book">
                - C'est pour mieu<span className="text-color">x</span> t'en-ten-dre mon en-fan<span className="text-color">t</span>...</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={7}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img8}/></div>
              <div className="page-text">
              <p className="text-book">- Mè-re-gran<span className="text-color">d</span> que vou<span className="text-color">s</span> a-vez de gran<span className="text-color">ds</span> yeu<span className="text-color">x</span> !</p>
                <p className="text-book">- C'est pour mieu<span className="text-color">x</span> te voir mon en-fan<span className="text-color">t</span>...</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={8}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img9}/></div>
              <div className="page-text">
              <p className="text-book">- Mè-re-gran<span className="text-color">d</span> que vou<span className="text-color">s</span> a-vez de gran-de<span className="text-color">s</span> den<span className="text-color">ts</span> !</p>
                <p className="text-book">- C'est pour mieu<span className="text-color">x</span> te cro-quer mon en-fan<span className="text-color">t</span>!</p>
              <p className="text-book">Et le lou<span className="text-color">p</span> se je-ta sur le Pe-ti<span className="text-color">t</span> Cha-pe-ron Rou-ge pour la dé-vo-rer !</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={9}>
          <div>
      
          <h4 className="page-header">Le petit chaperon rouge</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img10}/></div>
              <div className="page-text">
              <p className="text-book">Un chas-seur qui pas-sai<span className="text-color">t</span> par là, en-ten-di<span className="text-color">t</span> des cri<span className="text-color">s</span>. </p>
               <p className="text-book">Il se je-ta aus-si-tô<span className="text-color">t</span> sur le lou<span className="text-color">p</span> et la ba-tail-le fû<span className="text-color">t</span> ter-ri-ble ! Mai<span className="text-color">s</span> le chas-seur é-tai<span className="text-color">t</span> trè<span className="text-color">s</span> cou-ra-geu<span className="text-color">x</span>.</p>
               <p className="text-book">
               Il ré-us-si<span className="text-color">t</span> à li-go-ter le lou<span className="text-color">p</span> et à sau-ver le Pe-ti<span className="text-color">t</span> Cha-pe-ron Rou-ge et Mè-re-gran<span className="text-color">d</span>.
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

export default SyllabiqueChaperon;

