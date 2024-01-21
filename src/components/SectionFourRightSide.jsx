import SectionFourCard from "./SectionFourCard";
import React from 'react'
function SectionFourRightSide() {
  return (
    <div className="statCards">
      <div className="statCards1">
        <SectionFourCard image="./images/flag.png" title="Leader in 13 countries" text="Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile"/>
        <SectionFourCard image="./images/patients.png" title="90,000,000 patients" text="visit our websites each month"/>
      </div>
      <div className="statCards2">
        <SectionFourCard image="./images/visits.png" title="15,000,000 appointments" text="booked last month"/>
        <SectionFourCard image="./images/doctors.png" title="210,000 active doctors" text="trust our solutions"/>
      </div>
    </div>
  )
}

export default SectionFourRightSide
