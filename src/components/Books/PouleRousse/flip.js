import React from 'react';
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

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';

// basic cover
const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover-book4" ref={ref} data-density="hard">
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
class Flip extends React.Component {
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
      <div className="myRecipe_container">
      <div className="stpageflip">
        <Header />
        <HTMLFlipBook
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          width={550}
          height={700}
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

          <PageCover>La petite poule rousse</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text"><p className="text-book">Il était une foi<span className="text-color">s</span> une petite fille que tou<span className="text-color">t</span> le monde appelait le Peti<span className="text-color">t</span> Chaperon Rouge</p>
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
              <div className="page-text"><p className="text-book">
                Un jour sa mère lui donna un panier : 
                Mère-gran<span className="text-color">d</span> est malade, va lui porter cette galette et ce peti<span className="text-color">t</span> po<span className="text-color">t</span> de beurre
              </p>
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
              <div className="page-text"><p className="text-book">
              Le Peti<span className="text-color">t</span> Chaperon Rouge se mi<span className="text-color">t</span> en chemin.
              Mais un lou<span className="text-color">p</span> affamé l'arrêta :</p>
              <p className="text-book">"Où va<span className="text-color">s</span> tu ainsi?</p>
              <p className="text-book">"Chez mère-gran<span className="text-color">d</span>" lui répondi<span className="text-color">t</span>-elle</p>
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
              <div className="page-text"><p className="text-book">
              Le lou<span className="text-color">p</span> arriva le premier et frappa à la porte.</p>
              <p className="text-book">"Qui est là? ", demanda Mère-gran<span className="text-color">d</span></p>
              <p className="text-book">"C'est moi le Peti<span className="text-color">t</span> Chaperon Rouge", répondi<span className="text-color">t</span>-il en déguisan<span className="text-color">t</span> sa voi<span className="text-color">x</span>.</p>
              <p className="text-book">-"Tire la chevillette, la bobinette cherra."</p>
              
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
              <div className="page-text"><p className="text-book">
                La porte s'ouvri<span className="text-color">t</span> et le lou<span className="text-color">p</span> se jeta sur Mère-gran<span className="text-color">d</span>.</p>
                <p className="text-book">Pui<span className="text-color">s</span> il pri<span className="text-color">t</span> sa place dan<span className="text-color">s</span> son li<span className="text-color">t</span>.
              </p>
              <p className="text-book">C'est alor<span className="text-color">s</span> qu'on frappa à la porte.</p>
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
                "Qui est là?", demanda le lou<span className="text-color">p</span> d'une voi<span className="text-color">x</span> douce.</p>
                <p className="text-book">
                "C'est le Peti<span className="text-color">t</span> Chaperon Rouge! Je vous apporte une galette et un po<span className="text-color">t</span> de beurre."</p>
                <p className="text-book">
                "Tire la chevillette, la bobinette cherra."
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
              <div className="page-text"><p className="text-book">
                En regardan<span className="text-color">t</span> Mère-gran<span className="text-color">d</span> de plu<span className="text-color">s</span> prè<span className="text-color">s</span>, la fillette s'étonna :</p><p className="text-book">
                "Mère-gran<span className="text-color">d</span> que vou<span className="text-color">s</span> avez de grande<span className="text-color">s</span> oreille<span className="text-color">s ! "</span></p><p className="text-book">
                "C'est pour mieu<span className="text-color">x</span> t'entendre mon enfan<span className="text-color">t</span>..."
              </p>
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
              <div className="page-text"><p className="text-book">
                "Mère-gran<span className="text-color">d</span> que vou<span className="text-color">s</span> avez de gran<span className="text-color">ds</span> yeu<span className="text-color">x</span> !"</p>
                <p className="text-book">
                "C'est pour mieu<span className="text-color">x</span> te voir mon enfan<span className="text-color">t</span>..."
              </p>
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
              <div className="page-text"><p className="text-book">
                "Mère-gran<span className="text-color">d</span> que vou<span className="text-color">s</span> avez de grande<span className="text-color">s</span> den<span className="text-color">ts</span> !"</p>
                <p className="text-book">
                "C'est pour mieu<span className="text-color">x</span> te croquer mon enfan<span className="text-color">t</span>!!"
              </p>
              <p className="text-book">
              Et le lou<span className="text-color">p</span> se jeta sur le Peti<span className="text-color">t</span> Chaperon Rouge pour la dévorer !</p>
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
              <div className="page-text"><p className="text-book">
               Un chasseur qui passait par là, entendi<span className="text-color">t</span> des cri<span className="text-color">s</span>. </p>
               <p className="text-book">
               Il se jeta aussitô<span className="text-color">t</span> sur le lou<span className="text-color">p</span> et la bataille fût terrible ! Mais le chasseur était très courageu<span className="text-color">x</span>.</p>
               <p className="text-book">
               Il réussit à ligoter le lou<span className="text-color">p</span>et à sauver le Peti<span className="text-color">t</span> Chaperon Rouge et Mère-gran<span className="text-color">d</span>
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

