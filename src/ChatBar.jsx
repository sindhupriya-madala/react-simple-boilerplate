import React, {Component} from 'react';

class ChatBar extends Component {
     constructor(props) {
         super(props);
         this.handleMessage =  this.handleMessage.bind(this);
        }
  // getInitialState() {
  //   return {}
  // }

  handleMessage(event) {
    if(event.key === 'Enter') {
      console.log('message has received', event.target.value);
      this.props.NewMessage(event.target.value)
    }
  };
      
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue = {this.props.username} />
        <input className="chatbar-message"  placeholder="Type a message and hit ENTER" onKeyDown={this.handleMessage} />
      </footer>
    );
  }
}
export default ChatBar;
