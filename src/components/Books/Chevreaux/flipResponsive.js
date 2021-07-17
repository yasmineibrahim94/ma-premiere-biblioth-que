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
    <p className="text-book-responsive">Il était une fois une maman chèvre qui vivait avec ses septs petits chevreaux.</p>
    <p className="text-book-responsive">- Je m'en vais chercher à manger. N'ouvrez à personne et surtout attention au loup! Vous le reconnaîtrez à sa voix grave et à ses longues pattes noires.</p>
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
    <p className="text-book-responsive">A peine fut-elle partie que le loup frappa à la porte.</p>
    <p className="text-book-responsive">- C'est moi votre mère ! Ouvrez-moi mes chers enfants...</p>
    <p className="text-book-responsive">- Notre maman a une voix douce, pas toi ! Tu es le loup nous n'ouvrirons pas.</p>
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
    <p className="text-book-responsive">Mais le loup était bien décidé à les croquer et avala de la croix pour adoucir sa voix.</p>
    <p className="text-book-responsive">- C'est moi votre mère, ouvrez-moi mes chers enfants...</p>
    <p className="text-book-responsive">Mais les chevreaux virent la patte noire du loup et n'ouvrirent pas.</p>
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
    <p className="text-book-responsive">Alors le loup trouva de la farine pour y plonger sa patte.</p>
    <p className="text-book-responsive">- C'est moi votre mère, ouvrez-moi mes chers enfants...</p>
    <p className="text-book-responsive">- Montre patte blanche !</p>
    <p className="text-book-responsive">Le loup montra sa patte blanche et la porte s'ouvrit. Il se jeta aussitôt sur les chevreaux et les dévora tous sauf le petit dernier qui eut le temps de se cacher.</p>
    
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
      <p className="text-book-responsive">Le loup est venu, raconta-t-il. Il a mangé tous mes frères.</p>
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
    <p className="text-book-responsive">Ils trouvèrent le loup endormi au pied d'un arbre.</p>
      <p className="text-book-responsive">- Vite ! des ciseaux, du fil et une aiguille ! dit la mère à son petit</p>
      <p className="text-book-responsive">Cric-Cric ! Maman chèvre découpa le ventre du loup et en sorti six petits chevreaux effrayés mais vivants. Puis elle mit six grosses pierres dans le ventre du loup avant de le recoudre.</p>
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
    <p className="text-book-responsive">Le loup en se réveillant avait le ventre si lourd qu'il voulut boire au ouits mais il tomba tout au fond !</p>
      <p className="text-book-responsive">Et personne ne le revit jamais....</p>
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
