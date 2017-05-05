import React, {Component} from 'react';
import Message from './Message.jsx';



class MessageList extends Component {

  render() {

    const messages = this.props.messages.map((message) => {
      console.log(message);
      if(message.type === "incomingMessage") {
        return <Message 
          key =  {message.id}
          username={message.username}
          content={message.content}
          color = {message.color}
          />
      } else if(message.type === "incomingNotification"){
        return <Message
          key = {message.id}
          notification = {message.content}
          />
      }
    })  
    return (
      <main className="messages">
        {messages}
        </main>
    );
  }
}
export default MessageList;
