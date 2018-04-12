import React from 'react';

export const House = (props) => {
  const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = props;

  return <div className="Card">
    <h2>{name}</h2>
    <h3>Founded:</h3>
    <p>{founded}</p>
    <h3>Seats:</h3>
    <p>{seats}</p>
    <h3>Titles:</h3>
    <p>{titles}</p>
    <h3>Coat of Arms:</h3>
    <p>{coatOfArms}</p>
    <h3>Ancestral Weapons:</h3>
    <p>{ancestralWeapons}</p>
    <h3>Words:</h3>
    <p>{words}</p>
  </div>;

} 