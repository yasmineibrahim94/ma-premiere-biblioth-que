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

<PageCover>Hansel et Gretel</PageCover>

<Page number={0}>
<div>

<h4 className="page-header">Hansel et Gretel</h4>
<div className="page" ref={this.ref}>

    <div className="page-img">
    <img className="img-book-responsive" src={img1}/></div>
    <div className="page-text">
    <p className="text-book-responsive">Il était une foi<span className="text-color">s</span> un frère et une soeur qui s'appelaient Hansel et Gretel. Leurs parents étaient si pauvres qu'un jour ils durent abandonner les deux enfants dans la forêt.</p>
    <p className="text-book-responsive">Après avoir érré plusieurs jours, ils découvrirent une bien appétissante maison. Tout en bonbons et friandises !</p>
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
    <p className="text-book-responsive">Les enfants se précipitèrent pour la croquer mais la porte de biscuit s'ouvrit sur une vieille femme : </p>
    <p className="text-book-responsive">- Venez, mes chers enfants je vais vous donner à manger !</p>
    <p className="text-book-responsive">Hansel et Gretel entrèrent dans la maison.
    
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
    <p className="text-book-responsive">Mais la vieille femme était une sorcière !</p>
    <p className="text-book-responsive">Elle enferma Hansel dans une cage et lui apporta chaque jours des friandises, gâteaux et bonbons juqu'à ce qu'elle le trouve assez gros pour le dévorer tandis que Gretel était condamnée à récurer la maison.</p>
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
    <p className="text-book-responsive">La sorcière alluma le four et demanda à Gretel de rentrer dedans pour vérifier qu'il était assez chaud.</p>
    <p className="text-book-responsive">- Je ne sais pas comment faire, montre moi ! lui répondit Gretel.</p>
    <p className="text-book-responsive">La sorcière passa la tête dans le four et Gretel la poussa très fort et referma la porte. Elle eut beau taper, hurler mais la sorcière brûla.</p>
    
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
    <p className="text-book-responsive">Puis Gretel courut délivrer Hansel.</p>
    <p className="text-book-responsive">En fouillant le grenier, ils découvrirent une cachette secrète avec plein de pièces d'or et d'argent, des diamants et des bijoux.</p>
    <p className="text-book-responsive">Hansel et Gretel allaient pouvoir rejoindre leurs parents et vivrent heureux à l'abri du besoin.</p>
    
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
