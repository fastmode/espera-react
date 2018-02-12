import React, { Component } from 'react';
// import { connect } from 'react-redux';
import FavoritePortCard from '../components/FavoritePortCard';


class FavoritePorts extends Component {
  
  render() {

    return (
      <div key={this.props.port.id} >
        <FavoritePortCard 
          index={this.props.index}
          port={this.props.port}
          onPortClick={this.props.onPortClick}
        />
      </div>
    )
  }
}

export default FavoritePorts;