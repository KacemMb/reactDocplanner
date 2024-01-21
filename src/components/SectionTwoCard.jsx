import React from 'react'
import SelectCountry from './SelectCountry'
function SectionTwoCard(props) {
  return (
    <div className='sectionTwoContainer' id={setId(props.Mykey)}>
      <div className='sectionTwoInformation'>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className='CardOption'>
        <SelectCountry country="Choose country"/>
      </div>
    </div>
  )
}

export default SectionTwoCard
function setId(key){
  switch (key) {
    case 0:
        return "card1";
      break;
    case 1:
      return "card2"
      break;
    case 2:
      return "card3"  
      break;
    default:
      return "undef"
      break;
  }
}