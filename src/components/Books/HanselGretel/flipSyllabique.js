import React from 'react';
import {Link} from 'react-router-dom'

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';
import img1 from '../../../assets/fonts/HanselGretel/img1.jpg';
import img2 from '../../../assets/fonts/HanselGretel/img2.jpg';
import img3 from '../../../assets/fonts/HanselGretel/img3.jpg';
import img4 from '../../../assets/fonts/HanselGretel/img4.jpg';
import img5 from '../../../assets/fonts/HanselGretel/img5.jpg';
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
class SyllabiqueHansel extends React.Component {
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
        <Header />

        <div className="buttons">
<Link to="hansel_et_gretel" type="button" className="button">Version classique</Link>
<Link to="hansel_et_gretel_syllabique" type="button" className="button">Version syllabique</Link>
</div>

        <HTMLFlipBook
          width={500}
          height={700}
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
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

          <PageCover>Hansel et Gretel</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text">
              <p className="text-book">Il é-tai<span className="text-color">t</span> une foi<span className="text-color">s</span> un frè-re et une s<span className="text-color">o</span>eur qui s'ap-pe-lai<span className="text-color">ent</span> <span className="text-color">H</span>an-sel et Gre-tel. Leur<span className="text-color">s</span> pa-ren<span className="text-color">ts</span> é-tai<span className="text-color">ent</span> si pau-vre<span className="text-color">s</span> qu'un jour il<span className="text-color">s</span> du-re<span className="text-color">nt</span> a-ban-don-ner les deu<span className="text-color">x</span> en-fan<span className="text-color">ts</span> dan<span className="text-color">s</span> la fo-rê.<span className="text-color">t</span></p>
              <p className="text-book">A-prè<span className="text-color">s</span> a-voir ér-ré plu-si-eur<span className="text-color">s</span> jour<span className="text-color">s</span>, il<span className="text-color">s</span> dé-cou-vri-re<span className="text-color">nt</span> une bien ap-pé-tis-san-te mai-son. Tou<span className="text-color">t</span> en bon-bon<span className="text-color">s</span> et fri-an-di-se<span className="text-color">s</span> !</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img2}/></div>
              <div className="page-text">
              <p className="text-book">Les en-fan<span className="text-color">ts</span> se pré-ci-pi-tè-re<span className="text-color">nt</span> pour la cro-quer mai<span className="text-color">s</span> la por-te de bis-cui<span className="text-color">t</span> s'ou-vri<span className="text-color">t</span> sur une vieil-le fem-me : </p>
              <p className="text-book">- Ve-nez, mes cher<span className="text-color">s</span> en-fan<span className="text-color">ts</span> je vai<span className="text-color">s</span> vou<span className="text-color">s</span> don-ner à man-ger !</p>
              <p className="text-book"><span className="text-color">H</span>an-sel et Gre-tel en-trè-re<span className="text-color">nt</span> dan<span className="text-color">s</span> la mai-son.
              
              </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img3}/></div>
              <div className="page-text">
              <p className="text-book">Mai<span className="text-color">s</span> la vieil-le fem-me é-tai<span className="text-color">s</span> une sor-ci-ère !</p>
              <p className="text-book">Elle en-fer-ma <span className="text-color">H</span>an-sel dan<span className="text-color">s</span> une ca-ge et lui ap-por-ta cha-que jour des fri-an-di-se<span className="text-color">s</span>, gâ-teau<span className="text-color">x</span> et bon-bon<span className="text-color">s</span> jus-qu'à ce qu'elle le trou-ve as-sez gro<span className="text-color">s</span> pour le dé-vo-rer tan-di<span className="text-color">s</span> que Gre-tel é-tai<span className="text-color">t</span> con-da<span className="text-color">m</span>-né<span className="text-color">e</span> à ré-cu-rer la mai-son.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img4}/></div>
              <div className="page-text">
              <p className="text-book">La sor-ci-ère al-lu-ma le four et de-man-da à Gre-tel de ren-trer de-dan<span className="text-color">s</span> pour vé-ri-fi-er qu'il é-tai<span className="text-color">t</span> as-sez chau<span className="text-color">d</span>.</p>
              <p className="text-book">- Je ne sai<span className="text-color">s</span> pas com-men<span className="text-color">t</span> fai-re, mon-tre moi ! lui ré-pon-di<span className="text-color">t</span> Gre-tel.</p>
              <p className="text-book">La sor-ci-ère pas-sa la tê-te dans le four et Gre-tel la pous-sa trè<span className="text-color">s</span> for<span className="text-color">t</span> et re-fer-ma la por-te. Elle eu<span className="text-color">t</span> beau ta-per, hur-ler, Gre-tel n'ou-vri<span className="text-color">t</span> pa<span className="text-color">s</span> et la sor-ci-ère brû-la.</p>
              
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img5}/></div>
              <div className="page-text">
              <p className="text-book">Pui<span className="text-color">s</span> Gre-tel cou-ru<span className="text-color">t</span> dé-liv-rer <span className="text-color">H</span>an-sel.</p>
              <p className="text-book">En fouil-lan<span className="text-color">t</span> le gre-nier, il<span className="text-color">s</span> dé-cou-vri-re<span className="text-color">nt</span> une ca-chet-te se-crè-te avec plein de pi-è-ce<span className="text-color">s</span> d'or et d'ar-gen<span className="text-color">t</span>, des dia-man<span className="text-color">ts</span> et des bi-jou<span className="text-color">x</span>.</p>
              <p className="text-book"><span className="text-color">H</span>an-sel et Gre-tel al-lai<span className="text-color">ent</span> pou-voir re-join-dre leur<span className="text-color">s</span> pa-ren<span className="text-color">ts</span> et vi-vre<span className="text-color">nt</span> <span className="text-color">h</span>eu-reu<span className="text-color">x</span> à l'a-bri du be-soin.</p>
              
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

export default SyllabiqueHansel;
