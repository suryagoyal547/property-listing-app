import React, { useState } from 'react'

import newyork from '../rawData/NewyorkData'
import london from '../rawData/LondonData'
import paris from '../rawData/ParisData'
import mumbai from '../rawData/MumbaiData'

import Card from './Card'

import './styles/listing.css'




const Listing = (props) => {

  const [visibleCards, setVisibleCards] = useState(6);

  const showMore = ()=>{

    setVisibleCards((prevVisibleCards) => prevVisibleCards +3);

  }

  let cityData;

  // Assuming the city name matches the imported variable names
  switch (props.cityName) {
    case 'newyork':
      cityData = newyork;
      break;
    case 'london':
      cityData = london;
      break;
    case 'paris':
      cityData = paris;
      break;
    case 'mumbai':
      cityData = mumbai;
      break;
    default:
      cityData = [];
  }


  return (
    <div>

      
      <div className="card-container">
      {cityData.slice(0,visibleCards).map((ele, index) => 
    
    <Card id={ele.id} loc={ele.location} info={ele.info} img={ele.image} ad={ele.adress} />
       
     
   )}
      </div>



{visibleCards < cityData.length && (
        <button className='show-more-btn' onClick={showMore}>Show More</button>
      )}

      
    </div>
  )
}

export default Listing

