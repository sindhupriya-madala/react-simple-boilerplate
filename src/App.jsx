import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
//import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
//import userdata from '../build/user.json';

const data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 5,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
    this.NewMessage =  this.NewMessage.bind(this);

  }

  componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id:4, username: "sindhupriya", content: "Hello there!", status: "pending"};
    const messages = this.state.messages.concat(newMessage);
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}

NewMessage(message) {
  const newmessage = {id:8, username: "sindhu", content:message};
  const messages = this.state.messages.concat(newmessage);
  this.setState({messages: messages})
}
  render() {
    return (
      <div>
        <NavBar/>
        <MessageList messages = {this.state.messages}/>
        <ChatBar username={this.state.currentUser.name} NewMessage={this.NewMessage}/>
        </div>
    );
  }
}
export default App;
