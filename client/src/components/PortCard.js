import React from 'react';

const PortCard = ({ port, onPortClick }) => (
  <div key={port.id} className="PortCard" onClick={() => onPortClick(port)} >
    <h3>{port.port_name}</h3>
    <p>
      {port.crossing_name} <br />
      Hours: {port.hours}
    </p>
  </div>
)

export default PortCard;