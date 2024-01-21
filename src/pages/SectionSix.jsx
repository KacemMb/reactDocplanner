import React from 'react'
import CityCard from '../components/CityCard'
import CityData from '../json/CardsData.json'
import '../style/SectionSix.css'
function SectionSix() {
  return (
    <div className='SectionSix'>
      {CityData.map((data,index)=>(
        <CityCard key={index} image={data['image-url']} title={data.name}/>
      ))}
    </div>
  )
}

export default SectionSix
