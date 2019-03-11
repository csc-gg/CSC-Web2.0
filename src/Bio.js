import React, { Component } from 'react';

class Bio extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="bio" >
        <div className="bio-profile-pic">
          <img src={this.props.bio_data.profile_pic} />
        </div>
        <div className="bio-name">
          {this.props.bio_data.name}
        </div>
        <div className="bio-title">
          {this.props.bio_data.title}
        </div>
        <div className="bio-bio">
          {this.props.bio_data.bio}
        </div>
      </div>
    )
  }

}
export default Bio;
