import React, {Component} from 'react';
import Upload from 'material-ui-upload/Upload';
import Avatar from 'material-ui/Avatar';

class Image_Preview extends Component {

    constructor(props){
      super(props)
      this.state = {
        Avatar:''
      }
    }

    onFileLoad = (e, file) => {
      this.setState({Avatar: e.target.result});
      this.giveImage();
    }

    giveImage(){
      this.props.getProfileImage(this.state.Avatar);
    }

    render() {
        return (
          <div>
            <Avatar
            size={150}
            src={this.state.Avatar}
              />
            <Upload label="Add" onFileLoad={this.onFileLoad}/>
          </div>
        );
    }
}
export default Image_Preview;
