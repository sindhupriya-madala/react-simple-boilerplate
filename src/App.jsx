import React, {Component} from 'react';
//const WebSocket = require('ws');


import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const data = {
  currentUser: {name : 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
    this.NewMessage =  this.NewMessage.bind(this);
    //this.socket = ws;

  }

  componentDidMount() {
   this.socket =  new WebSocket('ws://localhost:3001');
    
   this.socket.onopen = () => {
      console.log("connection made in client side");
      this.socket.onmessage = (event) => {
        const messageDetails =  JSON.parse(event.data);
        //this.state.currentUser = messageDetails.username;
        this.setState({currentUser: messageDetails.username});
        const messages = this.state.messages.concat(messageDetails);
        this.setState({messages: messages})
    }
    };

    
  console.log("componentDidMount <App />");
  
}

NewMessage(newmessage) {
  // const newmessage = {username: messageDetails.username, content: messageDetails.message};
  
  this.socket.send(JSON.stringify(newmessage));
}
  
render() {
    return (
      <div>
        <NavBar/>
        <MessageList messages = {this.state.messages}/>
        <ChatBar username={this.state.name} NewMessage={this.NewMessage}/>
        </div>
    );
  }
}
export default App;
