import React from 'react';

const PortCard = ({ port, onHeartClick }) => (
  <div key={port.id} className="PortCard"  >
    <h3>{port.port_name}</h3>
    <p>
      {port.crossing_name} <br />
      Hours: {port.hours} <br />
      <i className="fa fa-heart-o" onClick={() => onHeartClick(port)}></i>
    </p>
  </div>
)

export default PortCard;