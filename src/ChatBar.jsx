import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props) {
      super(props);
      this.getUserName = this.getUserName.bind(this);
      this.handleMessage =  this.handleMessage.bind(this);
    }

    

    getUserName(event) {
      this.setState( {username : event.target.value});
    }

    handleMessage(event) {
      if(event.key === 'Enter') {
        console.log('message has received', event.target.value);
        const message = {username: this.state.username, content: event.target.value}
        this.props.NewMessage(message);
      }
    };
      
    render() {
      return (
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyUp={this.getUserName}/>
          <input className="chatbar-message"  placeholder="Type a message and hit ENTER" onKeyDown={this.handleMessage} />
        </footer>
      );
    }
}
export default ChatBar;
