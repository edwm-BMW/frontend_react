import React from 'react';
import { Link } from 'react-router-dom';


function Hotelcards(props) {
    return (
        <div  className="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card"> 
        <div className="card-header text-center">
          <img
           src={props.image}
            alt="hotels"
            className="rounded-5 mt-2 shadow-lg"
            width={120}
          />
        </div>
    
          <div class="card-body p-4 text-center">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text"></p>
          <button>
            <Link className="btn btn-primary" to={`/hotelinfo/${props.id}`}>
              Details
            </Link>
          </button>
        </div>
      </div>
      </div>
    )
}
Hotelcards.defaultProps = {
  name:"hotel",
  src:"public\logo512.png",

}

export default Hotelcards;