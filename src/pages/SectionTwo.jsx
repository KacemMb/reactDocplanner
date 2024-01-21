import React from 'react'
import SectionTwoCard from '../components/SectionTwoCard'
import myData from '../json/SectionTwoCardsData.json'
import '../style/SectionTwo.css'
function SectionTwo() {
  return (
    <div className='SectionTwo'>
      {myData.map((data,index)=>(
        <SectionTwoCard key={index} title={data.title} text={data.text} image={data.iconUrl} Mykey={index}/>
      ))}
    </div>
  )
}

export default SectionTwo
