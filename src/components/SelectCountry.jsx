import React from 'react'

function SelectCountry(props) {
  return (
    <select name="" id="" className='selectCountry'>
        <option value="">{props.country}</option>
        <option value="usa">United States</option>
        <option value="canada">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="australia">Australia</option>
        <option value="germany">Germany</option>
    </select>
  )
}

export default SelectCountry
