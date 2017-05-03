import React, {Component} from 'react';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {username : this.props.username,
                  content : this.props.content}
  }
  render() {
    return (
      <main className="messages">
        <div className="message">
            <span className="message-username">{this.state.username}</span>
            <span className="message-content">{this.state.content}</span>
        </div>
        <div className="message system">
            
        </div>
      </main>
    );
  }
}
export default Message;
