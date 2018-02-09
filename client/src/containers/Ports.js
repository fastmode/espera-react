import React from 'react';
import PortCard from '../components/PortCard';


const Ports = (props) => (
  <div>
    <h1>ESPERA | Ports</h1>
    {props.ports.map(port => <PortCard key={port.id} port={ port } />)}
  </div>
);

export default Ports;