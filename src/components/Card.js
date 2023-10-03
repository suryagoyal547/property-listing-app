import React from 'react'
import './styles/card.css'
import bath from '../rawData/icons/bath.png'
import bed from '../rawData/icons/bed.png'
import area from '../rawData/icons/area.png'
import location from '../rawData/icons/loc.png'
import room from '../rawData/icons/building.png'
import heart from '../rawData/icons/heart.png'

const Card = (props) => {
  return (
    <div className='card'>

        <div className="img"><img src={props.img} alt="image not found" /></div>

        <div className='rest'>
            <div className="loc">
              <span><img src={location} alt="" /></span>
              <span className='loc-text'>{props.loc}</span>
              </div>

              <div className="adress">
                <p>{props.ad}</p>
              </div>

            <div className="info">
                
              <div className="icon-container">
                <img src={bed} alt="" />
                <div>{props.info.rooms} bed</div>
              </div>

              <div className="icon-container">
                <img src={room} alt="" />
                <div>{props.info.rooms} rooms</div>
              </div>

              <div className="icon-container">
                <img src={bath} alt="" />
                <div>{props.info.bathrooms} Bath</div>
              </div>
              
              <div className="icon-container">
                <img src={area} alt="" />
                <div>{props.info.area} sft</div>
              </div>
                
            </div>

            <div className="foot">
                <div><span className='price'> ${props.info.price} </span>/month</div>
                <div className="btn"><button>Read More</button></div>
            </div>
            </div>


            <button className='for-rent'>For Rent</button>
            <img className='heart' src={heart} alt="" />

      
    </div>
  )
}

export default Card

