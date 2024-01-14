import myData from "../CardsData.json";
import React from "react";
function CityCards(){
    return(
        <div className="city-section">
                {myData.map((item, index) => (
                    <div className="city-cards" key={index}>
                    <img src={item['image-url']} alt="" className="city-card-image-style"/>
                    <div className="city-card-information">
                        <h2 className="city-card-name">{item.name}</h2>
                        <button className="city-card-btn">SEE OPENINGS</button>
                    </div>
                    </div>
                ))}
         </div>
    )
}
export default CityCards;