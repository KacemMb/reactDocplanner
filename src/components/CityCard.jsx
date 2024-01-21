import React from 'react'
import CityCardBtn from './CityCardBtn'
function CityCard(props) {
  return (
    <div className='CityCard'>
      <img src={props.image} alt="" />
      <div className='CityCardButtom'>
        <h1>{props.title}</h1>
        <CityCardBtn/>
      </div>
    </div>
  )
}

export default CityCard
