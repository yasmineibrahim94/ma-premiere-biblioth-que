import React from 'react';
import {Link} from 'react-router-dom'

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
class SyllabiqueChevreaux extends React.Component {
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
<Link to="/les_7_petits_chevreaux" type="button" className="button">Version classique</Link>
<Link to="/les_7_petits_chevreaux_syllabique" type="button" className="button-active">Version syllabique</Link>
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

          <PageCover>Le loup et les septs petits chevreaux</PageCover>

          <Page number={0}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img1}/></div>
              <div className="page-text">
              <p className="text-book">Il é-tai<span className="text-color">t</span> une foi<span className="text-color">s</span> une ma-man chè-vre qui vi-vai<span className="text-color">t</span> a-vec ses se<span className="text-color">p</span>t<span className="text-color">s</span> pe-ti<span className="text-color">ts</span> che-vreau<span className="text-color">x</span>.</p>
              <p className="text-book">- Je m'en vai<span className="text-color">s</span> cher-cher à man-ger. N'ou-vrez à per-son-ne et sur-tou<span className="text-color">t</span> at-ten-tion au lou<span className="text-color">p</span>! Vou<span className="text-color">s</span> le re-con-naî-trez à sa voi<span className="text-color">x</span> gra-ve et à ses lon-gue<span className="text-color">s</span> pat-te<span className="text-color">s</span> noi-re<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>


          <Page number={1}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img2}/></div>
              <div className="page-text">
              <p className="text-book">A pei-ne fu<span className="text-color">t</span>-elle par-ti<span className="text-color">t</span> que le lou<span className="text-color">p</span> frap-pa à la por-te.</p>
              <p className="text-book">- C'est moi vo-tre mè-re ! Ou-vrez-moi mes cher<span className="text-color">s</span> en-fan<span className="text-color">ts</span>...</p>
              <p className="text-book">- No-tre ma-man a une voi<span className="text-color">x</span> dou-ce, pa<span className="text-color">s</span> toi ! Tu es le lou<span className="text-color">p</span> nous n'ou-vri-ron<span className="text-color">s</span> pa<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={2}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img3}/></div>
              <div className="page-text">
              <p className="text-book">Mai<span className="text-color">s</span> le lou<span className="text-color">p</span> é-tai<span className="text-color">t</span> bien dé-ci-dé à les cro-quer et a-va-la de la crai<span className="text-color">e</span> pour a-dou-cir sa voi<span className="text-color">x</span>.</p>
              <p className="text-book">- C'est moi vo-tre mè-re, ou-vrez-moi mes cher<span className="text-color">s</span> en-fan<span className="text-color">ts</span>...</p>
              <p className="text-book">Mai<span className="text-color">s</span> les che-vreau<span className="text-color">x</span> vi-re<span className="text-color">nt</span> la pat-te noi-re du lou<span className="text-color">p</span> et n'ou-vri-re<span className="text-color">nt</span> pa<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={3}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img4}/></div>
              <div className="page-text">
              <p className="text-book">A-lor<span className="text-color">s</span> le lou<span className="text-color">p</span> trou-va de la fa-ri-ne pour y plon-ger sa pat-te.</p>
              <p className="text-book">- C'est moi vo-tre mè-re, ou-vrez-moi mes cher<span className="text-color">s</span> en-fan<span className="text-color">ts</span>...</p>
              <p className="text-book">- Mon-tre pat-te blan-che !</p>
              <p className="text-book">Le lou<span className="text-color">p</span> mon-tra sa pat-te blan-che et la por-te s'ou-vri<span className="text-color">t</span>. Il se je-ta aus-si-tô<span className="text-color">t</span> sur les che-vreau<span className="text-color">x</span> et les dé-vo-ra tous sauf le pe-ti<span className="text-color">t</span> der-ni-er qui eu<span className="text-color">t</span> le tem<span className="text-color">ps</span> de se ca-cher.</p>
              
            </div>

</div>
    </div>
          </Page>

          <Page number={4}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img5}/></div>
              <div className="page-text">
              <p className="text-book">A son re-tour, ma-man chè-vre trou-va la mai-son en dé-sor-dre et un seul che-vreau ter-ri-fié.</p>
                <p className="text-book">Le lou<span className="text-color">p</span> est ve-nu, ra-con-ta-t-il. Il a man-gé tou<span className="text-color">s</span> mes frè-re<span className="text-color">s</span>.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={5}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img6}/></div>
              <div className="page-text">
              <p className="text-book">Il<span className="text-color">s</span> <span className="text-color">s</span>trou-vè-re<span className="text-color">nt</span> le lou<span className="text-color">p</span> en-dor-mi au pie<span className="text-color">d</span> d'un ar-bre.</p>
                <p className="text-book">- Vi-te ! des ci-seau<span className="text-color">x</span>, du fil et une ai-guil-le ! di<span className="text-color">t</span> la mè-re à son pe-ti<span className="text-color">t</span></p>
                <p className="text-book">Cric-Cric ! Ma-man chè-vre dé-cou-pa le ven-tre du lou<span className="text-color">p</span> et en sor-ti six pe-ti<span className="text-color">ts</span> che-vreau<span className="text-color">x</span> ef-fra-yé<span className="text-color">s</span> mai<span className="text-color">s</span> vi-van<span className="text-color">ts</span>. Pui<span className="text-color">s</span> elle mi<span className="text-color">t</span> six gros-se<span className="text-color">s</span> pier-re<span className="text-color">s</span> dan<span className="text-color">s</span> le ven-tre du lou<span className="text-color">p</span> avan<span className="text-color">t</span> de le re-cou-dre.</p>
            </div>

</div>
    </div>
          </Page>

          <Page number={6}>
          <div>
      
          <h4 className="page-header">Le loup et les septs chevreaux</h4>
      <div className="page" ref={this.ref}>

              <div className="page-img">
              <img className="img-book" src={img7}/></div>
              <div className="page-text">
              <p className="text-book">Le lou<span className="text-color">p</span> en se ré-veil-lan<span className="text-color">t</span> a-vai<span className="text-color">t</span> le ven-tre si lour<span className="text-color">d</span> qu'il vou-lu<span className="text-color">t</span> boi-re au pui<span className="text-color">ts</span> mai<span className="text-color">s</span> il tom-ba tou<span className="text-color">t</span> au fon<span className="text-color">d</span> !</p>
                <p className="text-book">Et per-son-ne ne le re-vi<span className="text-color">t</span> ja-mai<span className="text-color">s</span>...</p>
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

export default SyllabiqueChevreaux;
