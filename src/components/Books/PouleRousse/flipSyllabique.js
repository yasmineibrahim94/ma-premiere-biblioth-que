import React from 'react';
import {Link} from 'react-router-dom'

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
class SyllabiquePoule extends React.Component {
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
<Link to="/la_petite_poule_rousse" type="button" className="button">Version classique</Link>
<Link to="/la_petite_poule_rousse_syllabique" type="button" className="button-active">Version syllabique</Link>
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

          <PageCover>La petite poule rousse</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text">
              <p className="text-book">Il é-tai<span className="text-color">t</span> une foi<span className="text-color">s</span> une pe-ti-te pou-le rous-se qui cher-chai<span className="text-color">t</span> quel-que cho-se à man-ger. Un jour elle dé-cou-vri<span className="text-color">t</span> d'ap-pé-tis-san<span className="text-color">ts</span> grain<span className="text-color">s</span> de blé et dé-ci-da de les se-mer plu-tô<span className="text-color">t</span> que de les pi-co-rer.</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img2}/></div>
              <div className="page-text">
              <p className="text-book">- Co-chon, mon a-mi co-chon ! Peu<span className="text-color">x</span>-tu m'ai-der à se-mer ces grain<span className="text-color">s</span> de blé ? lui de-man-da la pou-le</p>
              <p className="text-book">- Je ne peu<span className="text-color">x</span> pas ! Je dois al-ler pren-dre mon bain de bou<span className="text-color">e</span></p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img3}/></div>
              <div className="page-text">
              <p className="text-book">A-lor<span className="text-color">s</span> la pe-ti-te pou-le rous-se se-ma ses grain<span className="text-color">s</span> de blé tou-te seu-le et de beau<span className="text-color">x</span> é-pi<span className="text-color">s</span> sor-ti-re<span className="text-color">nt</span> de ter-re.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img4}/></div>
              <div className="page-text">
              <p className="text-book">- Ca-nar<span className="text-color">d</span>, mon a-mi ca-nar<span className="text-color">d</span>! Peu<span className="text-color">x</span>-tu m'ai-der à ré-col-ter ces é-pi<span className="text-color">s</span> de blé ? lui de-man-da la pe-ti-te pou-le rous-se</p>
              <p className="text-book">- Je ne peu<span className="text-color">x</span> pa<span className="text-color">s</span>, je pren<span className="text-color">ds</span> mon bain, lui ré-pon-di<span className="text-color">t</span>-il</p>             
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img5}/></div>
              <div className="page-text">
              <p className="text-book">A-lor<span className="text-color">s</span> la pe-ti-te pou-le rous-se ré-col-ta ses é-pi<span className="text-color">s</span> tou-te seu-le, puis elle les mi<span className="text-color">t</span> dan<span className="text-color">s</span> un gran<span className="text-color">d</span> sac pour al-ler les mou-dre au mou-lin mai<span className="text-color">s</span> que le sac étai<span className="text-color">t</span> lour<span className="text-color">d</span> et la pou-le é-tai<span className="text-color">t</span> pe-ti-te !</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={5}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img6}/></div>
              <div className="page-text">
              <p className="text-book">- Cha<span className="text-color">t</span>, mon a-mi cha<span className="text-color">t</span> ! Peu<span className="text-color">x</span>-tu m'ai-der à por-ter ce sac de blé ? lui de-man-da la pe-ti-te pou-le rous-se.</p>
                <p className="text-book">
              - Je ne peu<span className="text-color">x</span> pas, je n'ai pas fi-ni ma si-es-te, lui ré-pon-di<span className="text-color">t</span>-il.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={6}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img7}/></div>
              <div className="page-text">
              <p className="text-book">A-lor<span className="text-color">s</span> la pe-ti-te pou-le rous-se por-ta ses lour<span className="text-color">ds</span> sac<span className="text-color">s</span> de blé tou-te seu-le. Elle sor-ti<span className="text-color">t</span> les é-pi<span className="text-color">s</span> du sac tou-te seu-le. Elle sé-pa-ra les grain<span className="text-color">s</span> des é-pi<span className="text-color">s</span> tou-te seu-le. Elle je-ta les grain<span className="text-color">s</span> au mou-lin tou-te seu-le. Elle ra-mas-sa sa fa-ri-ne et la mi<span className="text-color">s</span> en sac tou-te seu-le.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={7}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img8}/></div>
              <div className="page-text">
              <p className="text-book">Pui<span className="text-color">s</span> ar-ri-vé<span className="text-color">e</span> chez elle, elle pri<span className="text-color">t</span> de l'eau, du sel, de la le-vu-re et sa fa-ri-ne pour pré-pa-rer sa pâ-te à pain.</p>
                <p className="text-book">Et de lon<span className="text-color">gs</span> mo-men<span className="text-color">ts</span> du-ran<span className="text-color">t</span>, elle pé-tri<span className="text-color">t</span> la pâ-te tou-te seu-le. </p>
                <p className="text-book">Ni le co-chon, ni le ca-nar<span className="text-color">d</span>, ni le cha<span className="text-color">t</span> ne vin-re<span className="text-color">nt</span> l'ai-der.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={8}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img9}/></div>
              <div className="page-text">
              <p className="text-book">En-fin le pain fu<span className="text-color">t</span> prêt et la pou-le le sor-ti<span className="text-color">t</span> du four. Quelle dé-li-ci-eu-se o-deur !</p>
                <p className="text-book">Le co-chon, le ca-nar<span className="text-color">d</span> et le cha<span className="text-color">t</span> ar-ri-vè-re<span className="text-color">nt</span> pres-te-men<span className="text-color">t</span> : </p>
              <p className="text-book">Pou-le, no-tre a-mi<span className="text-color">e</span> pou-le ! Pou-von<span className="text-color">s</span>-nou<span className="text-color">s</span> t'ai-der à man-ger ce bon pain ?</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={9}>
          <div>
      
          <h4 className="page-header">La petite poule rousse</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img10}/></div>
              <div className="page-text">
              <p className="text-book">La pe-ti-te pou-le rous-se ré-flé-chi<span className="text-color">t</span> lon-gue-ment pui<span className="text-color">s</span> di<span className="text-color">t</span> :</p>
               <p className="text-book">- J'ai se-mé le blé tou-te seu-le. J'ai ré-col-té le blé tou-te seu-le. Jai por-té les sac<span className="text-color">s</span> tou-te seu-le. J'ai pé-tri<span className="text-color">s</span> la pâ-te tou-te seu-le. </p>
               <p className="text-book">
              A-lor<span className="text-color">s</span> je vai<span className="text-color">s</span> man-ger ce bon pain TOU-TE SEU-LE!
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

export default SyllabiquePoule;

