import React, { Component } from 'react';
// import { connect } from 'react-redux';
import FavoritePortCard from '../components/FavoritePortCard';


class FavoritePorts extends Component {
  
  render() {

    const { index, port, onHeartClick } = this.props
    return (
      <div key={port.id} >
        <FavoritePortCard 
          index={index}
          port={port}
          onHeartClick={onHeartClick}
        />
      </div>
    )
  }
}

export default FavoritePorts;