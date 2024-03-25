import '../styles/home.css';
import Reveal from "react-awesome-reveal";
import { keyframes } from '@emotion/react';
import SDG1 from '../img/index/icon/SDG1.jpg'
import SDG2 from '../img/index/icon/SDG2.jpg'
import SDG3 from '../img/index/icon/SDG3.jpg'
import SDG4 from '../img/index/icon/SDG4.jpg'
import SDG5 from '../img/index/icon/SDG5.jpg'
import SDG6 from '../img/index/icon/SDG6.jpg'
import SDG7 from '../img/index/icon/SDG7.jpg'
import SDG8 from '../img/index/icon/SDG8.jpg'
import SDG9 from '../img/index/icon/SDG9.jpg'
import SDG10 from '../img/index/icon/SDG10.jpg'
import SDG11 from '../img/index/icon/SDG11.jpg'
import SDG12 from '../img/index/icon/SDG12.jpg'
import SDG13 from '../img/index/icon/SDG13.jpg'
import SDG14 from '../img/index/icon/SDG14.jpg'
import SDG15 from '../img/index/icon/SDG15.jpg'
import SDG16 from '../img/index/icon/SDG16.jpg'
import SDG17 from '../img/index/icon/SDG17.jpg'




const Animation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -70px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;


export default function Home() {
  return (
    <div className='containerHome' style={{overflowX:"hidden"}}>
      <div className='into-home container'>
        <h1 className='title' style={{ marginTop: "50px", marginBottom: "15px" }}>Agenda 2030</h1>
        <p className='paragraph'>L'Agenda 2030 è un piano globale delle Nazioni Unite che mira a raggiungere 17 Obbiettivi di Sviluppo Sostenibile entro il 2030. Questi obbiettivi coprono temi come la povertà, la salute, l'educazione, l'uguaglianza di genere, l'accesso all'acqua, l'energia sostenibile e la lotta contro il cambiamento climatico, con l'obbiettivo di creare un mondo più equo e sostenibile.</p>
        <h1 id='obbiettivi' className='title' style={{ marginTop: "30px", paddingBlock: "20px" }}>Obbiettivi:</h1>
      </div>
      <div className='grid'>
        <Reveal keyframes={Animation}>
          <a href='/obbiettivo1'><img src={SDG1} alt='SDG 1' /></a>
          <a href='/obbiettivo2'><img src={SDG2} alt='SDG 2' /></a>
          <a href='/obbiettivo3'><img src={SDG3} alt='SDG 3' /></a>
          <a href='/obbiettivo4'><img src={SDG4} alt='SDG 4' /></a>
          <a href='/obbiettivo5'><img src={SDG5} alt='SDG 5' /></a>
          <a href='/obbiettivo6'><img src={SDG6} alt='SDG 6' /></a>
          <a href='/obbiettivo7'><img src={SDG7} alt='SDG 7' /></a>
          <a href='/obbiettivo8'><img src={SDG8} alt='SDG 8' /></a>
          <a href='/obbiettivo9'><img src={SDG9} alt='SDG 9' /></a>
          <a href='/obbiettivo10'><img src={SDG10} alt='SDG 10' /></a>
          <a href='/obbiettivo11'><img src={SDG11} alt='SDG 11' /></a>
          <a href='/obbiettivo12'><img src={SDG12} alt='SDG 12' /></a>
          <a href='/obbiettivo13'><img src={SDG13} alt='SDG 13' /></a>
          <a href='/obbiettivo14'><img src={SDG14} alt='SDG 14' /></a>
          <a href='/obbiettivo15'><img src={SDG15} alt='SDG 15' /></a>
          <a href='/obbiettivo16'><img src={SDG16} alt='SDG 16' /></a>
          <a href='/obbiettivo17'><img src={SDG17} alt='SDG 17' /></a>
        </Reveal>
      </div>

      <div className='circles'>
        <div className='circle1'></div>
        <div className='circle2'></div>
      </div>
    </div>
  );
}
