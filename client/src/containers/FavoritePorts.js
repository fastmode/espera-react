import React, { Component } from 'react';
// import { connect } from 'react-redux';
import FavoritePortCard from '../components/FavoritePortCard';


class FavoritePorts extends Component {
  
  render() {

    const { index, port, onPortClick } = this.props
    return (
      <div key={port.id} >
        <FavoritePortCard 
          index={index}
          port={port}
          onPortClick={onPortClick}
        />
      </div>
    )
  }
}

export default FavoritePorts;