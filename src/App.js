import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Composants/Navbar/Navbar';
import Footer from './Composants/Footer/Footer';
import img2 from "./images/ad.jpg";
import img3 from "./images/kiloren.jpg";
import img4 from "./images/r2d2_c3p0-2x.jpg";
import img5 from "./images/stormtroopers-2x.jpg";
import HeaderLogo from './images/header.png'; 
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

//---------------Fonction pour le scroll parallax (Partie Non terminée) qui fonctionne dans le code mais n'affiche rien à l'écran----------
function App() {
  const[offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  
  },[]);
  const renderContent = () => (
    <div className="App" >
    
      <div>
        <Navbar />
      </div>
      <div className="container01" >
        <img  className="logo" src={HeaderLogo} alt="logo"/>
      </div>
      <div>
        <Row className='container0'>
          <Col>
          <div className='alignLeft'>
            <h1 >Star Wars, The Force Awakens</h1>
          
              Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ».

              Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.

              Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ».

              Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
            </div>
          </Col>

        <Col>
          <img className='img2' src={img2} alt="pic2"/>
        </Col>
        </Row>

      </div>
      <div className='container1'>
        
        <img src={img3} alt="pic3" />
      </div>
      <div className='container2'>
        <h1>A long time ago, in a galaxy far, far away…</h1>
        <div className='container3'>
          <div className='img4'>
          <img  src={img4} alt="pic4" />
          </div>
         <p className='alignRight'>
            La Guerre des étoiles (titre original Star Wars, soit littéralement Guerres Stellaires ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. 
            Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :
        
            La Guerre des étoiles (titre original Star Wars, soit littéralement Guerres Stellaires ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. 
            Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :
        
            La Guerre des étoiles (titre original Star Wars, soit littéralement Guerres Stellaires ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. 
            Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :
        
            La Guerre des étoiles (titre original Star Wars, soit littéralement Guerres Stellaires ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. 
            Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :
        
            La Guerre des étoiles (titre original Star Wars, soit littéralement Guerres Stellaires ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. 
            Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :
        </p>
        </div>
        <div className='text-img4'>

       
        <p className = "p0">
          - Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée, westerns, péplums, contes de fées et même le Seigneur des Anneaux de J.R.R. Tolkien ; cette œuvre n'apparaît pas comme de la science-fiction au sens strict mais plutôt comme du space fantasy.
          </p ><p className = "p1"> - Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation de John Dykstra (qui a également participé au premier film de Star Trek), qui avait développé une nouvelle manière d'animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).
          </p><p className = "p2"> - Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une ambiance que l'action proprement dite.
          </p><p className = "p3"> - La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé classique mais renforçant la cohérence).
        </p>
        </div>
       
      
      </div>
      <div className='container3'>
        <img src={img5} alt="pic5" />
      </div>
      <div>
        <div>
        <Footer />
      </div>


    </div>
  </div>

  );


return (
  <section className='Parallax'>
    <div className='Parallax_background'
    style={{transform: `translateY(${offsetY* 0.5})`}} />

    <div className='Parallax_background'
    style={{transform: `translateY(${offsetY* 0.8})`}}/>

    <div className='Parallax_content'> {renderContent()}</div>

  </section>
)
}
export default App;
