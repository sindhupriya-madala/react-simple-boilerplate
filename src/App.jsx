import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';



class App extends Component {
  
constructor(props) {
  super(props);
  this.state = {users : 1,
                name : 'Bob', 
                messages: [],
                color: 'black'
              };
  this.NewMessage =  this.NewMessage.bind(this);
}

componentDidMount() {
  this.socket =  new WebSocket('ws://localhost:3001');    
  this.socket.onopen = () => {
      this.socket.onmessage = (event) => {
        const messageDetails =  JSON.parse(event.data);
        switch(messageDetails.type) {
          case 'user':
            this.setState({users : messageDetails.count});
            break;
          case 'color':
            this.setState({color : messageDetails.color});
            break;
          default:
            const messages = this.state.messages.concat(messageDetails);
            this.setState({messages : messages});
        }
      }
    };
}

NewMessage(newmessage) {
  newmessage.color = this.state.color;
  this.socket.send(JSON.stringify(newmessage));
}
  
render() {
    return (
      <div>
        <NavBar users= {this.state.users}/>
        <MessageList messages = {this.state.messages} />
        <ChatBar username={this.state.name} NewMessage={this.NewMessage} color={this.state.color}/>
        </div>
    );
  }
}
export default App;
