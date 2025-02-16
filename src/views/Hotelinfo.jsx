import React from 'react'
import { useParams,Link } from 'react-router-dom'
import Données from '../Données';
import {Button} from "react-bootstrap"

function Hotelinfo() {
const {hotelid}= useParams();
const idnum= Number(hotelid);
const hotel = Données.find((item) => item.id === idnum); 

  return (
    <div>
      <b>
        <p>
        <img
           src={hotel.image}
            alt="hotels"
            className="rounded-5 mt-2 shadow-lg"
            width={1200}
          /><br/>
            <h2>{hotel.name}<br/></h2>
            <p>{hotel.ville}<br/></p>
            <p class>{hotel.details}<br/></p>

            <Link to={`/Booking/${hotelid}`}> <Button variant="primary">clicker ici pour reserver</Button></Link>

        </p>
      </b>
    </div>

  )
}

export default Hotelinfo