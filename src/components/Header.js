import React from 'react';
import { Link } from 'react-router-dom';
//import NavLink from '../components/NavLink';

export default class Header extends React.Component {

  // TODO, get the active in className working
  render() {
    return (
      <div className="ui secondary pointing menu">
        <div className="item">
          <Link to="/home">Home</Link>
        </div>
        <div className="item">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="item">
          <Link to="/resume">Resume</Link>
        </div>
        <div className="right menu">
          <div className="ui item">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
};