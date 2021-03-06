import React from 'react';

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
  <div className="page page-cover-book5" ref={ref} data-density="hard">
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

<PageCover>Hansel et Gretel</PageCover>

<Page number={0}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img1}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Il ??tai<span className="text-color">t</span> une foi<span className="text-color">s</span> un fr??re et une s<span className="text-color">o</span>eur qui s'appelai<span className="text-color">ent</span> <span className="text-color">H</span>ansel et Gretel. Leur<span className="text-color">s</span> paren<span className="text-color">ts</span> ??tai<span className="text-color">ent</span> si pauvre<span className="text-color">s</span> qu'un jour il<span className="text-color">s</span> dure<span className="text-color">nt</span> abandonner les deu<span className="text-color">x</span> enfan<span className="text-color">ts</span> dan<span className="text-color">s</span> la for??<span className="text-color">t</span></p>
              <p className="text-book-responsive">Apr??<span className="text-color">s</span> avoir ??rr?? plusieur<span className="text-color">s</span> jour<span className="text-color">s</span>, il<span className="text-color">s</span> d??couvrire<span className="text-color">nt</span> une bien app??tissante maison. Tou<span className="text-color">t</span> en bonbon<span className="text-color">s</span> et friandise<span className="text-color">s</span> !</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img2}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Les enfan<span className="text-color">ts</span> se pr??cipit??re<span className="text-color">nt</span> pour la croquer mai<span className="text-color">s</span> la porte de biscui<span className="text-color">t</span> s'ouvri<span className="text-color">t</span> sur une vieille femme : </p>
              <p className="text-book-responsive">- Venez, mes cher<span className="text-color">s</span> enfan<span className="text-color">ts</span> je vai<span className="text-color">s</span> vou<span className="text-color">s</span> donner ?? manger !</p>
              <p className="text-book-responsive"><span className="text-color">H</span>ansel et Gretel entr??re<span className="text-color">nt</span> dan<span className="text-color">s</span> la maison.
              
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
              <img className="img-book-responsive" src={img3}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Mai<span className="text-color">s</span> la vieille femme ??tai<span className="text-color">t</span> une sorci??re !</p>
              <p className="text-book-responsive">Elle enferma <span className="text-color">H</span>ansel dan<span className="text-color">s</span> une cage et lui apporta chaque jour des friandise<span className="text-color">s</span>, g??teau<span className="text-color">x</span> et bonbon<span className="text-color">s</span> jusqu'?? ce qu'elle le trouve assez gro<span className="text-color">s</span> pour le d??vorer tandi<span className="text-color">s</span> que Gretel ??tai<span className="text-color">t</span> condamn??<span className="text-color">e</span> ?? r??curer la maison.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img4}/></div>
              <div className="page-text">
              <p className="text-book-responsive">La sorci??re alluma le four et demanda ?? Gretel de rentrer dedan<span className="text-color">s</span> pour v??rifier qu'il ??tai<span className="text-color">t</span> assez chau<span className="text-color">d</span>.</p>
              <p className="text-book-responsive">- Je ne sai<span className="text-color">s</span> pas commen<span className="text-color">t</span> faire, montre moi ! lui r??pondi<span className="text-color">t</span> Gretel.</p>
              <p className="text-book-responsive">La sorci??re passa la t??te dans le four et Gretel la poussa tr??<span className="text-color">s</span> for<span className="text-color">t</span> et referma la porte. Elle eu<span className="text-color">t</span> beau taper, hurler, Gretel n'ouvri<span className="text-color">t</span> pa<span className="text-color">s</span> et la sorci??re br??la.</p>
              
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Hansel et Gretel</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img5}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Pui<span className="text-color">s</span> Gretel couru<span className="text-color">t</span> d??livrer <span className="text-color">H</span>ansel.</p>
              <p className="text-book-responsive">En fouillan<span className="text-color">t</span> le grenier, il<span className="text-color">s</span> d??couvrire<span className="text-color">nt</span> une cachette secr??te avec plein de pi??ce<span className="text-color">s</span> d'or et d'argen<span className="text-color">t</span>, des diaman<span className="text-color">ts</span> et des bijou<span className="text-color">x</span>.</p>
              <p className="text-book-responsive"><span className="text-color">H</span>ansel et Gretel allai<span className="text-color">ent</span> pouvoir rejoindre leur<span className="text-color">s</span> paren<span className="text-color">ts</span> et vivre<span className="text-color">nt</span> <span className="text-color">h</span>eureu<span className="text-color">x</span> ?? l'abri du besoin.</p>
              
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
