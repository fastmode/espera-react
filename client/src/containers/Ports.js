import React, { Component } from 'react';
import { connect } from 'react-redux'
import PortCard from '../components/PortCard';
import { getPorts } from '../actions/ports';

class Ports extends Component {

  componentDidMount() {
    this.props.getPorts()
  }

  render() {
    return (
      <div>
        <h1>ESPERA | Ports</h1>
        {this.props.ports.map(port => <PortCard key={port.id} port={ port } />)}
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