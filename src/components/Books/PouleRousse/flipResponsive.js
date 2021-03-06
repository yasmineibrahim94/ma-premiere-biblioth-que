import React from 'react';

// book import
import HTMLFlipBook from 'react-pageflip';

// composants import
import Header from '../../Header';
import Footer from '../../Footer';
import img1 from '../../../assets/fonts/Poule/img1.jpg';
import img2 from '../../../assets/fonts/Poule/img2.jpg';
import img3 from '../../../assets/fonts/Poule/img3.jpg';
import img4 from '../../../assets/fonts/Poule/img4.jpg';
import img5 from '../../../assets/fonts/Poule/img5.jpg';
import img6 from '../../../assets/fonts/Poule/img6.jpg';
import img7 from '../../../assets/fonts/Poule/img7.jpg';
import img8 from '../../../assets/fonts/Poule/img8.jpg';
import img9 from '../../../assets/fonts/Poule/img9.jpg';
import img10 from '../../../assets/fonts/Poule/img10.jpg';

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
                    <img className="img-book-responsive" src={img1} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">Il ??tai<span className="text-color">t</span> une foi<span className="text-color">s</span> une petite poule rousse qui cherchai<span className="text-color">t</span> quelque chose ?? manger. Un jour elle d??couvri<span className="text-color">t</span> d'app??tissan<span className="text-color">ts</span> grain<span className="text-color">s</span> de bl?? et d??cida de les semer plut??<span className="text-color">t</span> que de les picorer.</p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={1}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img2} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">- Cochon, mon ami cochon ! Peu<span className="text-color">x</span>-tu m'aider ?? semer ces grain<span className="text-color">s</span> de bl?? ? lui demanda la poule</p>
                    <p className="text-book-responsive">- Je ne peu<span className="text-color">x</span> pas ! Je dois aller prendre mon bain de bou<span className="text-color">e</span></p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={2}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img3} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">Alor<span className="text-color">s</span> la petite poule rousse sema ses grain<span className="text-color">s</span> de bl?? toute seule et de beau<span className="text-color">x</span> ??pi<span className="text-color">s</span> sortire<span className="text-color">nt</span> de terre.</p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={3}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img4} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">- Canar<span className="text-color">d</span>, mon ami canar<span className="text-color">d</span>! Peu<span className="text-color">x</span>-tu m'aider ?? r??colter ces ??pi<span className="text-color">s</span> de bl?? ? lui demanda la petite poule rousse</p>
                    <p className="text-book-responsive">- Je ne peu<span className="text-color">x</span> pa<span className="text-color">s</span>, je pren<span className="text-color">ds</span> mon bain, lui r??pondi<span className="text-color">t</span>-il</p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={4}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img5} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">Alor<span className="text-color">s</span> la petite poule rousse r??colta ses ??pi<span className="text-color">s</span> toute seule, puis elle les mi<span className="text-color">t</span> dan<span className="text-color">s</span> un gran<span className="text-color">d</span> sac pour aller les moudre au moulin mai<span className="text-color">s</span> que le sac ??tai<span className="text-color">t</span> lour<span className="text-color">d</span> et la poule ??tai<span className="text-color">t</span> petite !</p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={5}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img6} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">- Cha<span className="text-color">t</span>, mon ami cha<span className="text-color">t</span> ! Peu<span className="text-color">x</span>-tu m'aider ?? porter ce sac de bl?? ? lui demanda la petite poule rousse.</p>
                    <p className="text-book-responsive">
                      - Je ne peu<span className="text-color">x</span> pas, je n'ai pas fini ma sieste, lui r??pondi<span className="text-color">t</span>-il.
                    </p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={6}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img7} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">Alor<span className="text-color">s</span> la petite poule rousse porta ses lour<span className="text-color">ds</span> sac<span className="text-color">s</span> de bl?? toute seule. Elle sorti<span className="text-color">t</span> les ??pi<span className="text-color">s</span> du sac toute seule. Elle s??para les grain<span className="text-color">s</span> des ??pi<span className="text-color">s</span> toute seule. Elle jeta les grain<span className="text-color">s</span> au moulin toute seule. Elle ramassa sa farine et la mi<span className="text-color">s</span> en sac toute seule.</p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={7}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img8} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">Pui<span className="text-color">s</span> arriv??<span className="text-color">e</span> chez elle, elle pri<span className="text-color">t</span> de l'eau, du sel, de la levure et sa farine pour pr??parer sa p??te ?? pain.</p>
                    <p className="text-book-responsive">Et de lon<span className="text-color">gs</span> momen<span className="text-color">ts</span> duran<span className="text-color">t</span>, elle p??tri<span className="text-color">t</span> la p??te toute seule. </p>
                    <p className="text-book-responsive">Ni le cochon, ni le canar<span className="text-color">d</span>, ni le cha<span className="text-color">t</span> ne vinre<span className="text-color">nt</span> l'aider.</p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={8}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img9} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">Enfin le pain fu<span className="text-color">t</span> pr??t et la poule le sorti<span className="text-color">t</span> du four. Quelle d??licieuse odeur !</p>
                    <p className="text-book-responsive">Le cochon, le canar<span className="text-color">d</span> et le cha<span className="text-color">t</span> arriv??re<span className="text-color">nt</span> prestemen<span className="text-color">t</span> : </p>
                    <p className="text-book-responsive">Poule, notre ami<span className="text-color">e</span> poule ! Pouvon<span className="text-color">s</span>-nou<span className="text-color">s</span> t'aider ?? manger ce bon pain ?</p>
                  </div>

                </div>
              </div>
            </Page>

            <Page number={9}>
              <div>

                <h4 className="page-header">La petite poule rousse</h4>
                <div className="page" ref={this.ref}>

                  <div className="page-img">
                    <img className="img-book-responsive" src={img10} />
                  </div>
                  <div className="page-text">
                    <p className="text-book-responsive">La petite poule rousse r??fl??chi<span className="text-color">t</span> longuement pui<span className="text-color">s</span> di<span className="text-color">t</span> :</p>
                    <p className="text-book-responsive">- J'ai sem?? le bl?? toute seule. J'ai r??colt?? le bl?? toute seule. Jai port?? les sac<span className="text-color">s</span> toute seule. J'ai p??tri<span className="text-color">s</span> la p??te toute seule. </p>
                    <p className="text-book-responsive">
                      Alor<span className="text-color">s</span> je vai<span className="text-color">s</span> manger ce bon pain TOUTE SEULE!
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
