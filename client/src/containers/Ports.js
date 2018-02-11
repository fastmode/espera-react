import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritePorts from './FavoritePorts';
import PortCard from '../components/PortCard';
import { getPorts } from '../actions/ports';

class Ports extends Component {

  state = {
    favoritePorts: [], 
  }

  addPort = (port) => {
    const newPorts = this.state.favoritePorts.concat(port);
    this.setState({ favoritePorts: newPorts})
  }

  componentDidMount() {
    this.props.getPorts()
  }

  render() {

    const canada = this.props.ports.filter(port => port.border === "Canadian Border");
    const mexico = this.props.ports.filter(port => port.border === "Mexican Border");
    const favoritePorts = this.state.favoritePorts;

    console.log("favoritePorts:")
    console.log(this.state.favoritePorts);

    return (
      <div>
        <div>
          <h1>Favorite Ports</h1>
          <div className="container">
            {favoritePorts.map(port =>
            <FavoritePorts 
              port={port}
              onPortClick={"hola"}
            />
            )}

          </div>
        </div>
        <div>
          <h1>Canadian Ports</h1>
          <div className="container">
            {canada.map(port => 
              <PortCard 
                key={port.id} 
                port={ port } 
                onPortClick={this.addPort} 
              />
            )}
          </div>
        </div>
        <div>
          <h1>Mexican Ports</h1>
          <div className="container">
            {mexico.map(port =>
              <PortCard
                key={port.id}
                port={ port } 
                onPortClick={this.addPort} 
              />
            )}
          </div>
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