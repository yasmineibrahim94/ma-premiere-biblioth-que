import React from 'react';
import {Link} from 'react-router-dom'

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';
import img1 from '../../../assets/fonts/TroisCochons/img1.jpg';
import img2 from '../../../assets/fonts/TroisCochons/img2.jpg';
import img3 from '../../../assets/fonts/TroisCochons/img3.jpg';
import img4 from '../../../assets/fonts/TroisCochons/img4.jpg';
import img5 from '../../../assets/fonts/TroisCochons/img5.jpg';
import img6 from '../../../assets/fonts/TroisCochons/img6.jpg'; 
import img7 from '../../../assets/fonts/TroisCochons/img7.jpg'; 
import img8 from '../../../assets/fonts/TroisCochons/img8.jpg'; 


// basic cover
const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover-book2" ref={ref} data-density="hard">
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
class SyllabiqueTroisCochons extends React.Component {
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
        <Header />

        <div className="buttons">
<Link to="/les_3_petits_cochons" type="button" className="button">Version classique</Link>
<Link to="/les_3_petits_cochons_syllabique" type="button" className="button">Version syllabique</Link>
</div>

        <HTMLFlipBook
          width={500}
          height={700}
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
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

          <PageCover>Les trois petits cochons</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text">
              <p className="text-book">Il é-tai<span className="text-color"></span> une foi<span className="text-color">s</span> troi<span className="text-color">s</span> pe-ti<span className="text-color">ts</span> co-chon<span className="text-color">s</span> tou<span className="text-color">t</span> ro-se<span className="text-color">s</span> et tou<span className="text-color">t</span> ron<span className="text-color">ds.</span></p>
              <p className="text-book">Le tem<span className="text-color">ps</span> é-tai<span className="text-color">t</span> ve-nu pour eu<span className="text-color">x</span> de qui-tter pa-pa et ma-man et de se cons-trui-re cha-cun une bel-le mai-son.</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img2}/></div>
              <div className="page-text">
              <p className="text-book">
               Le pre-mi-er pe-ti<span className="text-color">t</span> co-chon di<span className="text-color">t</span> :</p>
               <p className="text-book">- Moi, je vai<span className="text-color">s</span> cons-trui-re une mai-son tou<span className="text-color">t</span> en pail-le!</p>
               <p className="text-book"> Et aus-si-tô<span className="text-color">t</span>, il se mi<span className="text-color">t</span> au tra-vail.
              </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img3}/></div>
              <div className="page-text">
              <p className="text-book">Le deu-xi-ème pe-ti<span className="text-color">t</span> co-chon di<span className="text-color">t</span> :</p>
              <p className="text-book">- Moi, je vai<span className="text-color">s</span> cons-trui-re une mai-son tou<span className="text-color">t</span> en boi<span className="text-color">s</span> !</p>
              <p className="text-book"> Et aus-si-tô<span className="text-color">t</span>, il se mi<span className="text-color">t</span> au tra-vail.</p>

            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img4}/></div>
              <div className="page-text">
              <p className="text-book">Le troi-si-ème pe-ti<span className="text-color">t</span> co-chon, dé-ci-da de cons-trui-re une mai-son en bri-que<span className="text-color">s</span>. Ce-la pri<span className="text-color">s</span> plus de tem<span className="text-color">ps</span>.</p>
              <p className="text-book">Et de-vi-nez qui ob-ser-vai<span className="text-color">t</span> les troi<span className="text-color">s</span> pe-ti<span className="text-color">ts</span> co-chon<span className="text-color">s</span> en se lé-chan<span className="text-color">t</span> les ba-bi-ne<span className="text-color">s</span>?
              </p>
              
            </div>

</div>
    </div>
          </Page>


          <Page number={4}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img5}/></div>
              <div className="page-text">
              <p className="text-book">Le lou<span className="text-color">p</span> bien sûr !</p>
              <p className="text-book"> Et 1, 2, 3... il souf-fla sur la mai-son de pail-le qui s'en-vo-la !</p>
              <p className="text-book">Et 4, 5, 6... il souf-fla sur la mai-son de boi<span className="text-color">s</span> qui s'en-vo-la aus-si !
              </p>
              
            </div>

</div>
    </div>
          </Page>

          <Page number={5}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img6}/></div>
              <div className="page-text">
              <p className="text-book">Vi-te, les deux pe-ti<span className="text-color">ts</span> co-chon<span className="text-color">s</span> s'en-fui-re<span className="text-color">nt</span> et se ré-fu-giè-re<span className="text-color">nt</span> dan<span className="text-color">s</span> la mai-son de leur frè-re.</p>
              <p className="text-book">Le lou<span className="text-color">p</span> s'ap-pro-cha de la mai-son de bri-que<span className="text-color">s</span> et souf-fla, souf-fla, souf-fla en-co-re.</p>
              <p className="text-book"> Mai<span className="text-color">s</span> la mai-son ne bou-gea pa<span className="text-color">s</span>.
              </p>
              
            </div>

</div>
    </div>
          </Page>


          <Page number={6}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img7}/></div>
              <div className="page-text">
              <p className="text-book">- Pa-ro-le de lou<span className="text-color">p</span>, je vai<span className="text-color">s</span> man-ger ces troi<span className="text-color">s</span> co-chon<span className="text-color">s</span> d'un seul cou<span className="text-color">p</span>! </p>
              <p className="text-book">Je vai<span className="text-color">s</span> ent-rer par la che-mi-né<span className="text-color">e</span> pour les dé-vo-rer ! gro-gna-t-il en es-ca-la-dan<span className="text-color">t</span> la mai-son...
              </p>
              
            </div>

</div>
    </div>
          </Page>


          <Page number={7}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img8}/></div>
              <div className="page-text">
              <p className="text-book">Et  plouf! Le lou<span className="text-color">p</span> tom-ba dans une mar-mi-te d'eau bouil-lan-te qui l'at-ten-dai<span className="text-color">t</span> sou<span className="text-color">s</span> la che-mi-née.
              Pour fê-ter ça, les pe-ti<span className="text-color">ts</span> co-chon<span className="text-color">s</span> man-gè-re<span className="text-color">nt</span> un dé-li-ci-eu<span className="text-color">x</span> ra-goû<span className="text-color">t</span> de lou<span className="text-color">p</span>!
              </p>
              
            </div>

</div>
    </div>
          </Page>

          <PageCover>Fin</PageCover>

        </HTMLFlipBook>
        <Footer />
      </div>

    );
  }
}

export default SyllabiqueTroisCochons;
