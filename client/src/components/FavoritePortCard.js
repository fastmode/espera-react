import React from 'react';


const FavoritePortCard = ({ port, onPortClick, index }) => (
  <div key={port.id} className="PortCard" onClick={() => onPortClick(index)} >
    <h3>{port.port_name}</h3>
    <p>{port.border}</p>
    <p>
      {port.crossing_name} <br />
      Hours: {port.hours}
    </p>
  </div>
)

export default FavoritePortCard;