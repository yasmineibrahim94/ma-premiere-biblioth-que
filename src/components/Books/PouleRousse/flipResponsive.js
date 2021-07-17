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
          width={315}
          height={400}
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
    <img className="img-book-responsive" src={img1}/></div>
    <div className="page-text">
    <p className="text-book-responsive">Il était une fois une petite poule rousse qui cherchait quelque chose à manger. Un jour elle découvrit d'appétissants grains de blé et décida de les semer plutôt que de les picorer.</p>
  </div>

</div>
</div>
</Page>


<Page number={1}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img2}/></div>
    <div className="page-text">
    <p className="text-book-responsive">- Cochon, mon ami cochon ! Peux-tu m'aider à semer ces grains de blé ? lui demanda la poule</p>
    <p className="text-book-responsive">- Je ne peux pas ! Je dois aller prendre mon bain de boue</p>
  </div>

</div>
</div>
</Page>

<Page number={2}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img3}/></div>
    <div className="page-text">
    <p className="text-book-responsive">Alors la petite poule rousse sema ses grains de blé toute seule et de beaux épis sortirent de terre.</p>
  </div>

</div>
</div>
</Page>

<Page number={3}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img4}/></div>
    <div className="page-text">
    <p className="text-book-responsive">- Canard, mon ami canard ! Peux-tu m'aider à récolter ces épis de blé ? lui demanda la petite poule rousse</p>
    <p className="text-book-responsive">- Je ne peux pas, je prends mon bain, lui répondit-il</p>             
  </div>

</div>
</div>
</Page>

<Page number={4}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img5}/></div>
    <div className="page-text">
    <p className="text-book-responsive">Alors la petite poule rousse récolta ses épis toute seule, puis elle les mit dans un grand sac pour aller les moudre au moulin mais que le sac était lourd et la poule était petite !</p>
  </div>

</div>
</div>
</Page>

<Page number={5}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img6}/></div>
    <div className="page-text">
    <p className="text-book-responsive">- Chat, mon ami chat ! Peux-tu m'aider à porter ce sac de blé ? lui demanda la petite poule rousse.</p>
      <p className="text-book-responsive">
    - Je ne peux pas, je n'ai pas fini ma sieste, lui répondit-il.</p>
  </div>

</div>
</div>
</Page>

<Page number={6}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img7}/></div>
    <div className="page-text">
    <p className="text-book-responsive">Alors la petite poule rousse porta ses lourds sacs de blé toute seule. Elle sortit les épis du sac toute seule. Elle sépara les grains des épis toute seule. Elle jeta les grains au moulin toute seule. Elle ramassa sa farine et la mis en sac toute seule.</p>
  </div>

</div>
</div>
</Page>

<Page number={7}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img8}/></div>
    <div className="page-text">
    <p className="text-book-responsive">Puis arrivée chez elle, elle prit de l'eau, du sel, de la levure et sa farine pour préparer sa pâte à pain.</p>
      <p className="text-book-responsive">Et de longs moments durant, elle pétrit la pâte toute seule. </p>
      <p className="text-book-responsive">Ni le cochon, ni le canard, ni le chat ne vinrent l'aider.</p>
  </div>

</div>
</div>
</Page>

<Page number={8}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img9}/></div>
    <div className="page-text">
    <p className="text-book-responsive">Enfin le pain fut prêt et la poule le sortit du four. Quelle délicieuse odeur !</p>
      <p className="text-book-responsive">Le cochon, le canard et le chat arrivèrent prestement : </p>
    <p className="text-book-responsive">Poule, notre amie poule ! Pouvons-nous t'aider à manger ce bon pain ?</p>
  </div>

</div>
</div>
</Page>


<Page number={9}>
<div>

<h4 className="page-header">La petite poule rousse</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img10}/></div>
    <div className="page-text">
    <p className="text-book-responsive">La petite poule rousse réfléchit longuement puis dit :</p>
     <p className="text-book-responsive">- J'ai semé le blé toute seule. J'ai récolté le blé toute seule. Jai porté les sacs toute seule. J'ai pétri la pâte toute seule. </p>
     <p className="text-book-responsive">
    Alors je vais manger ce bon pain TOUTE SEULE !
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
