import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritePorts from './FavoritePorts';
import PortCard from '../components/PortCard';
import { getPorts, setFavoritePort } from '../actions/ports';

class Ports extends Component {

  state = {
    favoritePorts: [], 
  }

  addPort = (port) => {
    const newPorts = this.state.favoritePorts.concat(port);
    this.setState({ favoritePorts: newPorts});
  }

  removePortItem = (portIndex) => {
    const filteredPorts = this.state.favoritePorts.filter((port, index) => portIndex !== index);
    this.setState({ favoritePorts: filteredPorts });
  }

  componentDidMount() {
    this.props.getPorts()
  }
  
  render() {
    const { ports } = this.props;

    const canada = ports.filter(port => port.border === "Canadian Border");
    const mexico = ports.filter(port => port.border === "Mexican Border");
    const favoritePorts = this.state.favoritePorts;

    console.log("favoritePorts:")
    console.log(this.state.favoritePorts);

    return (
      <div className="App">
        <div>
          <h2>Favorite Ports</h2>
          <div className="container">
            {favoritePorts.map((port, index) =>
            <FavoritePorts 
              port={port}
              index={index}
              key={port.id}
              onPortClick={this.removePortItem}
            />
            )}
          </div>
        </div>

        <div>
          <h2>Canadian Ports</h2>
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
          <h2>Mexican Ports</h2>
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