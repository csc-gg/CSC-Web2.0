import React, { Component } from 'react';
import Bio from './Bio.js';
class OfficialsList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    for (let i=0; i < 3; i++ )
    {
      return(<Bio bio_data={this.props.officials_list[i]} />);
    }
  }
}

export default OfficialsList;
