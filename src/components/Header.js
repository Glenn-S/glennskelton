import React from 'react';
import { Link } from 'react-router-dom';
//import NavLink from '../components/NavLink';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'home',
    };
  }

  isActive = (path) => {
    var active = path === this.state.active ? 'active' : '';
    return active;
  }

  onSelectNav = (e) => {
    this.setState({
      active: e.currentTarget.id,
    });
  }

  // TODO, get the active in className working
  render() {
    return (
      <div className="ui secondary pointing menu">
        <div className={`item ${this.isActive('home')}`} id="home" onClick={this.onSelectNav}>
          <Link to="/home">Home</Link>
        </div>
        <div className={`item ${this.isActive('portfolio')}`} id="portfolio" onClick={this.onSelectNav}>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className={`item ${this.isActive('resume')}`} id="resume" onClick={this.onSelectNav}>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="right menu">
          <div className={`item ${this.isActive('login')}`} id="login" onClick={this.onSelectNav}>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
};