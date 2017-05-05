import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props) {
      super(props);
      this.state = {username : this.props.username};
      this.getUserName = this.getUserName.bind(this);
      this.handleMessage =  this.handleMessage.bind(this);
    }

    

    getUserName(event) {
      if(event.key === 'Enter') {
        const value = event.target.value;
        const content = this.state.username + " has changed their name to " + event.target.value;
        const message = {type: "postNotification", content:  content};
        this.setState( {username : event.target.value});
        this.props.NewMessage(message);
      }  
    }

    handleMessage(event) {
      if(event.key === 'Enter') {
        const message = {type: "postMessage", username: this.state.username, content: event.target.value};
        this.props.NewMessage(message);
      }
    };
      
    render() {
      const divStyle = {
      color : this.props.color
    };
      return (
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.username} onKeyUp={this.getUserName} style={divStyle}/>
          <input className="chatbar-message"  placeholder="Type a message and hit ENTER" onKeyDown={this.handleMessage} />
        </footer>
      );
    }
}
export default ChatBar;
