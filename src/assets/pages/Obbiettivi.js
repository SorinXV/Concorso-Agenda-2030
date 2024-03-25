// obbiettivi.js
import React from 'react';
import '../styles/obbiettivi.css'
import obbiettiviData from '../../assets/data/obbiettivi.json';

const obbiettiviComponent = ({ obbiettivoKey }) => {
 
  const obbiettivo = obbiettiviData[obbiettivoKey];

  if (!obbiettivo) {
    return alert("L'obbiettivo non è stato trovato. Se leggi questa schermata scrivi a Sorin :) ");
  }

  const renderList = (list) => (
    list ? (
      <ul>
        {list.split('/').map((item, index) => (
          <li key={index}>
            <a>{item.trim()}</a>
          </li>
        ))}
      </ul>
    ) : null
  );

  return (
    <div className='containerobbiettivo ' >
      <header style={{ backgroundColor: obbiettivo.color,}}>
        <h1 className='title container specific-goal-title'   >{obbiettivo.title} </h1>
      </header>
      <div className='container' id='json-goal-content'>
        <h2 className='subtitle adjust-goal-container' style={{marginTop:"50px"}}>{obbiettivo.subtitle1}</h2>
        <p className='paragraph adjust-goal-container'>{obbiettivo.paragraph1}</p>
        <a className='list adjust-goal-container'>{renderList(obbiettivo.list1)}</a>
        <img className='goal-image adjust-goal-container' src={obbiettivo.image1}/>
        <h2 className='subtitle adjust-goal-container'>{obbiettivo.subtitle2}</h2>
        <p className='paragraph adjust-goal-container'>{obbiettivo.paragraph2}</p>
        <a className='list adjust-goal-container'>{renderList(obbiettivo.list2)}</a>
        <img className='goal-image adjust-goal-container' src={obbiettivo.image2}/>
      </div>
    </div>
  );
};

export default obbiettiviComponent;
