import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortCard from '../components/PortCard';


class FavoritePorts extends Component {
  
  render() {
    
    return (
      <div>
        <PortCard 
          key={this.props.port.id}
          port={this.props.port}
        />
      </div>
    )
  }
}

export default FavoritePorts;