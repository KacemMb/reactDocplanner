import React from 'react'

function SectionFourCard(props) {
  return (
    <div className='statCard'>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default SectionFourCard