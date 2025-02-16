import React from 'react'
import Hotelcards from '../components/Hotelcards'
import Données from '../Données'

function Hotels() {
  return (
    <div class="container">
  <div className="row justify-content-center">
{Données.map((i) => {
          return (
           
        <Hotelcards 
            id={i.id}
            image={i.image}
            name={i.name}
            ville={i.ville}
        />)
        })
        }</div>
    </div>
  )
}

export default Hotels