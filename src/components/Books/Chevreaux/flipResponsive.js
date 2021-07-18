import React from 'react';

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';
import img1 from '../../../assets/fonts/Chevreaux/img1.jpg';
import img2 from '../../../assets/fonts/Chevreaux/img2.jpg';
import img3 from '../../../assets/fonts/Chevreaux/img3.jpg';
import img4 from '../../../assets/fonts/Chevreaux/img4.jpg';
import img5 from '../../../assets/fonts/Chevreaux/img5.jpg';
import img6 from '../../../assets/fonts/Chevreaux/img6.jpg'; 
import img7 from '../../../assets/fonts/Chevreaux/img7.jpg'; 

// basic cover
const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover-book3" ref={ref} data-density="hard">
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
        <Header />

        <HTMLFlipBook
          width={315}
          height={400}
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

<PageCover>Le loup et les septs chevreaux</PageCover>

<Page number={0}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img1}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Il étai<span className="text-color">t</span> une foi<span className="text-color">s</span> une maman chèvre qui vivai<span className="text-color">t</span> avec ses se<span className="text-color">p</span>t<span className="text-color">s</span> peti<span className="text-color">ts</span> chevreau<span className="text-color">x</span>.</p>
              <p className="text-book-responsive">- Je m'en vai<span className="text-color">s</span> chercher à manger. N'ouvrez à personne et surtou<span className="text-color">t</span> attention au lou<span className="text-color">p</span>! Vou<span className="text-color">s</span> le reconnaîtrez à sa voi<span className="text-color">x</span> grave et à ses longue<span className="text-color">s</span> patte<span className="text-color">s</span> noire<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img2}/></div>
              <div className="page-text">
              <p className="text-book-responsive">A peine fu<span className="text-color">t</span>-elle parti<span className="text-color">t</span> que le lou<span className="text-color">p</span> frappa à la porte.</p>
              <p className="text-book-responsive">- C'est moi votre mère ! Ouvrez-moi mes cher<span className="text-color">s</span> enfan<span className="text-color">ts</span>...</p>
              <p className="text-book-responsive">- Notre maman a une voi<span className="text-color">x</span> douce, pa<span className="text-color">s</span> toi ! Tu es le lou<span className="text-color">p</span> nous n'ouvriron<span className="text-color">s</span> pa<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img3}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Mai<span className="text-color">s</span> le lou<span className="text-color">p</span> étai<span className="text-color">t</span> bien décidé à les croquer et avala de la crai<span className="text-color">e</span> pour adoucir sa voi<span className="text-color">x</span>.</p>
              <p className="text-book-responsive">- C'est moi votre mère, ouvrez-moi mes cher<span className="text-color">s</span> enfan<span className="text-color">ts</span>...</p>
              <p className="text-book-responsive">Mai<span className="text-color">s</span> les chevreau<span className="text-color">x</span> vire<span className="text-color">nt</span> la patte noire du lou<span className="text-color">p</span> et n'ouvrire<span className="text-color">nt</span> pa<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img4}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Alor<span className="text-color">s</span> le lou<span className="text-color">p</span> trouva de la farine pour y plonger sa patte.</p>
              <p className="text-book-responsive">- C'est moi votre mère, ouvrez-moi mes cher<span className="text-color">s</span> enfan<span className="text-color">ts</span>...</p>
              <p className="text-book-responsive">- Montre patte blanche !</p>
              <p className="text-book-responsive">Le lou<span className="text-color">p</span> montra sa patte blanche et la porte s'ouvri<span className="text-color">t</span>. Il se jeta aussitô<span className="text-color">t</span> sur les chevreau<span className="text-color">x</span> et les dévora tous sauf le peti<span className="text-color">t</span> dernier qui eu<span className="text-color">t</span> le tem<span className="text-color">ps</span> de se cacher.</p>
              
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img5}/></div>
              <div className="page-text">
              <p className="text-book-responsive">A son retour, maman chèvre trouva la maison en désordre et un seul chevreau terrifié.</p>
                <p className="text-book-responsive">Le lou<span className="text-color">p</span> est venu, raconta-t-il. Il a mangé tou<span className="text-color">s</span> mes frère<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={5}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img6}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Il<span className="text-color">s</span> <span className="text-color">s</span>trouvère<span className="text-color">nt</span> le lou<span className="text-color">p</span> endormi au pie<span className="text-color">d</span> d'un arbre.</p>
                <p className="text-book-responsive">- Vite ! des ciseau<span className="text-color">x</span>, du fil et une aiguille ! di<span className="text-color">t</span> la mère à son peti<span className="text-color">t</span></p>
                <p className="text-book-responsive">Cric-Cric ! Maman chèvre découpa le ventre du lou<span className="text-color">p</span> et en sorti six peti<span className="text-color">ts</span> chevreau<span className="text-color">x</span> effrayé<span className="text-color">s</span> mai<span className="text-color">s</span> vivan<span className="text-color">ts</span>. Pui<span className="text-color">s</span> elle mi<span className="text-color">t</span> six grosse<span className="text-color">s</span> pierre<span className="text-color">s</span> dan<span className="text-color">s</span> le ventre du lou<span className="text-color">p</span> avan<span className="text-color">t</span> de le recoudre.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={6}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img7}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Le lou<span className="text-color">p</span> en se réveillan<span className="text-color">t</span> avai<span className="text-color">t</span> le ventre si lour<span className="text-color">d</span> qu'il voulu<span className="text-color">t</span> boire au pui<span className="text-color">ts</span> mai<span className="text-color">s</span> il tomba tou<span className="text-color">t</span> au fon<span className="text-color">d</span> !</p>
                <p className="text-book-responsive">Et personne ne le revi<span className="text-color">t</span> jamai<span className="text-color">s</span>...</p>
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
