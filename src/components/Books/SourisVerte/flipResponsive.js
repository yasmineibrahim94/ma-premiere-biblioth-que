import React from 'react';

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
  <div className="page page-cover-book6" ref={ref} data-density="hard">
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

          <PageCover>Une souris verte</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img1}/></div>
              <div className="page-text">
              <p className="text-book-responsive">
                Une souri<span className="text-color">s</span> verte</p>
                <p className="text-book-responsive">Qui courai<span className="text-color">t</span> dan<span className="text-color">s</span> l'<span className="text-color">h</span>erbe</p>
                <p className="text-book-responsive">Je l'attrape par la queu<span className="text-color">e</span></p>
                <p className="text-book-responsive"> Je la montre ?? ces monsieu<span className="text-color">rs</span>
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
              <img className="img-book-responsive" src={img2}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Ces monsieu<span className="text-color">rs</span> me dise<span className="text-color">nt</span></p>
              <p className="text-book-responsive">Trempez la dan<span className="text-color">s</span> l'<span className="text-color">h</span>uile</p>
              <p className="text-book-responsive">Trempez la dan<span className="text-color">s</span> l'eau</p>
              <p className="text-book-responsive">??a fera un escargo<span className="text-color">t</span> tou<span className="text-color">t</span> chau<span className="text-color">d</span>!
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
              <img className="img-book-responsive" src={img3}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Je la met<span className="text-color">s</span> dan<span className="text-color">s</span> mon tiroir,</p>
              <p className="text-book-responsive">Elle me di<span className="text-color">t</span> : "il fai<span className="text-color">t</span> tro<span className="text-color">p</span> noir"</p>
          
              
              
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img4}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Je la met<span className="text-color">s</span> dan<span className="text-color">s</span> mon chapeau,</p>
              <p className="text-book-responsive">Elle me di<span className="text-color">t</span> : "il fai<span className="text-color">t</span> tro<span className="text-color">p</span> chau<span className="text-color">d</span>"</p>
          
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Une souris verte</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book-responsive" src={img5}/></div>
              <div className="page-text">
              <p className="text-book-responsive">Je la met<span className="text-color">s</span> dan<span className="text-color">s</span> ma culotte,</p>
              <p className="text-book-responsive">Elle me fai<span className="text-color">t</span> troi<span className="text-color">s</span> petite<span className="text-color">s</span> crotte<span className="text-color">s</span>
               
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
