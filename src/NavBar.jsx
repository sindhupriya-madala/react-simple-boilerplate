import React, {Component} from 'react';

class NavBar extends Component {
  
  render() {
    const divStyle = {
      float : 'right',
    };
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h4 style={divStyle}> {this.props.users} users online </h4>
    </nav>
    );
  }
}
export default NavBar;
