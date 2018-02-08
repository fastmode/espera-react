import React from 'react';

const Ports = (props) => (
  <div>
    <h1>ESPERA | Ports</h1>
    {props.ports.map(port => 
      <div className="PortCard">
        <h3>{port.name}</h3>
        <p>Country: {port.country}</p>
        <p>Status: {port.status}</p>
        <p>Delay: {port.delay} mins</p>
      </div>
    )}
  </div>
);

export default Ports;