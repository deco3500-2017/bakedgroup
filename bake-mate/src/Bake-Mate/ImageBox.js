import React, { Component } from 'react';

import './Create_Event.css';

class ImageBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      image: props.image,
      active: false,
    }
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(){
    this.setState({active:true});
    this.props.getImage(this.state.image);
  }

  render(){
    if(this.state.active){
      return(

      <div>
        <img
        src={this.state.image}
        alt=""
        onClick={this.toggleActive}
        className="active"
        />
      </div>
    )
    }else{
    return(
      <div>
        <img
        src={this.state.image}
        alt=""
        onClick={this.toggleActive}
        className="inactive"
        />
      </div>
    )
  }

}
}

export default ImageBox;
