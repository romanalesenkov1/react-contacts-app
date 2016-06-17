import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {

  render() {
    return (
      <div>
        <header id="header">
          <h1>Contacts App</h1>
        </header>
        <ul role="nav" className="header-nav">
          <li><Link to="/" onlyActiveOnIndex activeClassName="active" className="link">Home</Link></li>
          <li><Link to="/contacts" activeClassName="active" className="link">Contacts</Link></li>
        </ul>
      </div>
    );
  }

}
