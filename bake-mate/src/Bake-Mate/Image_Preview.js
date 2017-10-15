import React, {Component} from 'react';
import Upload from 'material-ui-upload/Upload';
import Avatar from 'material-ui/Avatar';

import './image.css';

class Image_Preview extends Component {

    constructor(props){
      super(props)
      this.state = {
        Avatar:'',
        useAvatar:props.useAvatar
      }
    }

    onFileLoad = (e, file) => {
      this.setState({Avatar: e.target.result});
      this.giveImage();
    }

    giveImage(){
      this.props.getImage(this.state.Avatar);
    }

    render() {
      if(this.state.useAvatar){
        return (
          <div>
            <Avatar
            size={150}
            src={this.state.Avatar}
              />
            <Upload label="Add" onFileLoad={this.onFileLoad}/>
          </div>
        );
      }else{
        return(
          <div className="wrapper">
          <img
          src={this.state.Avatar}
          className="image"
          />
          <Upload
          label="Add"
          onFileLoad={this.onFileLoad}

          />
          </div>
        )
      }
    }
}
export default Image_Preview;
