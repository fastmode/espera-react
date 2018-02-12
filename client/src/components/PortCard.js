import React from 'react';

const PortCard = ({ port, onPortClick }) => (
  <div key={port.id} className="PortCard"  >
    <h3>{port.port_name}</h3>
    <p>
      {port.crossing_name} <br />
      Hours: {port.hours} <br />
      <i class="fa fa-heart-o" onClick={() => onPortClick(port)}></i>
    </p>
  </div>
)

export default PortCard;