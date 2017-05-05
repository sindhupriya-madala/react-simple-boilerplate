import React, {Component} from 'react';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {username : this.props.username,
                  content : this.props.content,
                notification: this.props.notification};
    this.getImage = this.getImage.bind(this);
  }


  getImage(){
    const content = this.state.content;
      if(content && content.indexOf('.jpg') > -1){
        return <img width="60%" src={ content }/>;  
      } else {
        return content;
      } 
  }

  render() {
    const divStyle = {
      color : this.props.color
    };
    
    return (
      <main className="messages">
        <div className="message">
            <span className="message-username" style={divStyle}>{this.state.username}</span>
            <span className="message-content">{this.getImage()}</span>
        </div>
        <div className="message-system">
           <span className="message-content"> {this.state.notification} </span>
        </div>
      </main>
    );
  }
}
export default Message;
