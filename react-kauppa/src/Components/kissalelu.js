import React from 'react'
import logo from '../images/kissalaser.jpg';

 function Kissalelu({tuotelista}) {

 console.log({tuotelista});

  return (
    <div className="product-item">
      <img src= {logo} alt="tuotteen kuva" />
      <h3> {tuotelista.nimi}  </h3>
      <p> {tuotelista.kuvaus} </p>
      <p> {tuotelista.hinta},00 €</p>
      <button>Lisää ostoskoriin</button>
    </div>
  )
}

export default Kissalelu;