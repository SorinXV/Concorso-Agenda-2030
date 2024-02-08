// Obiettivi.js
import React from 'react';
import obiettiviData from '../../assets/data/obiettivi.json';

const ObiettiviComponent = ({ obiettivoKey }) => {
  const obiettivo = obiettiviData[obiettivoKey];
    //This allert should be pointless be pointless cause if the path is wrong it automatically gets redirected to home
  if (!obiettivo) {
    return alert("L'obiettivo non è stato trovato.");
  }

  return (
    <div>
      Hello from 'Obiettivi'
      <h1>{obiettivo.title}</h1>
      <h2>{obiettivo.subtitle}</h2>
      <p>{obiettivo.paragraph}</p>
      {/* Render other properties as needed */}
    </div>
  );
};

export default ObiettiviComponent;
