import React from 'react';

const PortCard = ({ port }) => (
  <div key={port.id} className="PortCard">
    <h3>{port.port_name}</h3>
    <p>{port.border}</p>
    <p>Crossing Name: {port.crossing_name}</p>
    <p>Hours: {port.hours}</p>
  </div>
)

export default PortCard;