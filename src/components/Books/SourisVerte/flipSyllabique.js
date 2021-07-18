import React from 'react';
import {Link} from 'react-router-dom'

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';
import img1 from '../../../assets/fonts/SourisVerte/img1.jpg'
import img2 from '../../../assets/fonts/SourisVerte/img2.jpg'
import img3 from '../../../assets/fonts/SourisVerte/img3.jpg'
import img4 from '../../../assets/fonts/SourisVerte/img4.jpg'
import img5 from '../../../assets/fonts/SourisVerte/img5.jpg'



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
class SyllabiqueSouris extends React.Component {
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
<Link to="/une_souris_verte" type="button" className="button">Version classique</Link>
<Link to="/une_souris_verte_syllabique" type="button" className="button">Version syllabique</Link>
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

          <PageCover>Une souris verte</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text">
              <p className="text-book">
                Une sou-ri<span className="text-color">s</span> ver-te</p>
                <p className="text-book">Qui cou-rai<span className="text-color">t</span> dan<span className="text-color">s</span> l'<span className="text-color">h</span>er-be</p>
                <p className="text-book">Je l'at-tra-pe par la queu<span className="text-color">e</span></p>
                <p className="text-book"> Je la mon-tre à ces mon-sieu<span className="text-color">rs</span>
              </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={1}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img2}/></div>
              <div className="page-text">
              <p className="text-book">Ces mon-sieu<span className="text-color">rs</span> me di-se<span className="text-color">nt</span></p>
              <p className="text-book">Trem-pez la dan<span className="text-color">s</span> l'<span className="text-color">h</span>ui-le</p>
              <p className="text-book">Trem-pez la dan<span className="text-color">s</span> l'eau</p>
              <p className="text-book">ça fe-ra un es-car-go<span className="text-color">t</span> tou<span className="text-color">t</span> chau<span className="text-color">d</span>!
             </p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img3}/></div>
              <div className="page-text">
              <p className="text-book">Je la met<span className="text-color">s</span> dan<span className="text-color">s</span> mon ti-roir,</p>
              <p className="text-book">Elle me di<span className="text-color">t</span> : "il fai<span className="text-color">t</span> tro<span className="text-color">p</span> noir"</p>
          
              
              
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img4}/></div>
              <div className="page-text">
              <p className="text-book">Je la met<span className="text-color">s</span> dan<span className="text-color">s</span> mon cha-peau,</p>
              <p className="text-book">Elle me di<span className="text-color">t</span> : "il fai<span className="text-color">t</span> tro<span className="text-color">p</span> chau<span className="text-color">d</span>"</p>
          
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img5}/></div>
              <div className="page-text">
              <p className="text-book">Je la met<span className="text-color">s</span> dan<span className="text-color">s</span> ma cu-lo-tte,</p>
              <p className="text-book">Elle me fai<span className="text-color">t</span> troi<span className="text-color">s</span> pe-ti-te<span className="text-color">s</span> cro-tte<span className="text-color">s</span>
               
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

export default SyllabiqueSouris;
