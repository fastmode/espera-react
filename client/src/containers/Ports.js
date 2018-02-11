import React, { Component } from 'react';
import { connect } from 'react-redux'
import PortCard from '../components/PortCard';
import { getPorts } from '../actions/ports';

class Ports extends Component {

  state = {
    favoritePorts: [],
  }

  componentDidMount() {
    this.props.getPorts()
  }

  render() {

    const canada = this.props.ports.filter(port => port.border === "Canadian Border");
    const mexico = this.props.ports.filter(port => port.border === "Mexican Border");

    return (
      <div>
        <div>
          <h1>Canadian Ports</h1>
          {canada.map(port => 
            <PortCard 
              key={port.id} 
              port={ port } />
          )}
        </div>
        <div>
          <h1>Mexican Ports</h1>
          {mexico.map(port =>
            <PortCard
              key={port.id}
              port={ port } />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    ports: state.ports
  })
}

export default connect(mapStateToProps, { getPorts })(Ports);



// To filter only Canada Ports
// {
//   const canada = this.props.ports.filter(port => port.border === "Canadian Border");
//   canada.map(c => 
//     <PortCard 
//       key={c.id}
//       port={c}
// )}


// {
//   this.props.ports.map(port => 
//   <PortCard 
//     key={port.id} 
//     port={ port } />
//   )
// }