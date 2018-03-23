import React from 'react';


const FavoritePortCard = ({ port, onHeartClick, index }) => (
  <div key={port.id} className="PortCard"  >
    <h3>{port.port_name}</h3>
    <p>{port.border}</p>
    <p>
      {port.crossing_name} <br />
      Hours: {port.hours} <br />
      <i className="fa fa-heart" onClick={() => onHeartClick(index)}></i>
    </p>
  </div>
)

export default FavoritePortCard;