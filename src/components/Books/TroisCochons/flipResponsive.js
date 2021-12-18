import React from 'react';

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
      <div>
        <Header />

        <HTMLFlipBook
          width={315}
          height={400}
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
              <img className="img-book-responsive" src={img1}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Il étai<span className="text-color">t</span> une foi<span className="text-color">s</span> troi<span className="text-color">s</span> peti<span className="text-color">ts</span> cochon<span className="text-color">s</span> tou<span className="text-color">t</span> rose<span className="text-color">s</span> et tou<span className="text-color">t</span> ron<span className="text-color">ds.</span></p>
              <p className="text-book-responsive">Le tem<span className="text-color">ps</span> étai<span className="text-color">t</span> venu pour eu<span className="text-color">x</span> de quitter papa et maman et de se construire chacun une belle maison.</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img2}/></div>
              <div className="page-text">
              <p className="text-book-responsive">
               Le premier peti<span className="text-color">t</span> cochon di<span className="text-color">t</span> :</p>
               <p className="text-book-responsive">- Moi, je vai<span className="text-color">s</span> construire une maison tou<span className="text-color">t</span> en paille!</p>
               <p className="text-book-responsive"> Et aussitô<span className="text-color">t</span>, il se mi<span className="text-color">t</span> au travail.
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
              <img className="img-book-responsive" src={img3}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Le deuxième peti<span className="text-color">t</span> cochon di<span className="text-color">t</span> :</p>
              <p className="text-book-responsive">- Moi, je vai<span className="text-color">s</span> construire une maison tou<span className="text-color">t</span> en boi<span className="text-color">s</span> !</p>
              <p className="text-book-responsive"> Et aussitô<span className="text-color">t</span>, il se mi<span className="text-color">t</span> au travail.</p>

            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Les trois petits cochons</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img4}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Le troisième peti<span className="text-color">t</span> cochon, décida de construire une maison en brique<span className="text-color">s</span>. Cela pri<span className="text-color">s</span> plus de tem<span className="text-color">ps</span>.</p>
              <p className="text-book-responsive">Et devinez qui observai<span className="text-color">t</span> les troi<span className="text-color">s</span> peti<span className="text-color">ts</span> cochon<span className="text-color">s</span> en se léchan<span className="text-color">t</span> les babine<span className="text-color">s</span>?
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
              <img className="img-book-responsive" src={img5}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Le lou<span className="text-color">p</span> bien sûr !</p>
              <p className="text-book-responsive"> Et 1, 2, 3... il souffla sur la maison de paille qui s'envola !</p>
              <p className="text-book-responsive">Et 4, 5, 6... il souffla sur la maison de boi<span className="text-color">s</span> qui s'envola aussi !
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
              <img className="img-book-responsive" src={img6}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Vite, les deux peti<span className="text-color">ts</span> cochon<span className="text-color">s</span> s'enfuire<span className="text-color">nt</span> et se réfugière<span className="text-color">nt</span> dan<span className="text-color">s</span> la maison de leur frère.</p>
              <p className="text-book-responsive">Le lou<span className="text-color">p</span> s'approcha de la maison de brique<span className="text-color">s</span> et souffla, souffla, souffla encore.</p>
              <p className="text-book-responsive"> Mai<span className="text-color">s</span> la maison ne bougea pa<span className="text-color">s</span>.
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
              <img className="img-book-responsive" src={img7}/></div>
              <div className="page-text">
              <p className="text-book-responsive">- Parole de lou<span className="text-color">p</span>, je vai<span className="text-color">s</span> manger ces troi<span className="text-color">s</span> cochon<span className="text-color">s</span> d'un seul cou<span className="text-color">p</span>! </p>
              <p className="text-book-responsive">Je vai<span className="text-color">s</span> entrer par la cheminé<span className="text-color">e</span> pour les dévorer ! grogna-t-il en escaladan<span className="text-color">t</span> la maison...
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
              <img className="img-book-responsive" src={img8}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Et  plouf! Le lou<span className="text-color">p</span> tomba dans une marmite d'eau bouillante qui l'attendai<span className="text-color">t</span> sou<span className="text-color">s</span> la cheminée.
              Pour fêter ça, les peti<span className="text-color">ts</span> cochon<span className="text-color">s</span> mangère<span className="text-color">nt</span> un délicieu<span className="text-color">x</span> ragoû<span className="text-color">t</span> de lou<span className="text-color">p</span>!
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

export default FlipResponsive;
