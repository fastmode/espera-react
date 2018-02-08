import React from 'react';

const Ports = (props) => (
  <div>
    <h1>ESPERA | Ports</h1>
    {props.ports.map(port => 
      <div className="PortCard">
        <h3>{port.port_name}</h3>
        <p>{port.border}</p>
        <p>Crossing Name: {port.crossing_name}</p>
        <p>Hours: {port.hours}</p>
      </div>
    )}
  </div>
);

export default Ports;