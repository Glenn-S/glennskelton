import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { activeLink } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: 'home',
    };
  }

  isActive = (path) => {
    var active = path === this.state.active ? 'active' : '';
    return active;
  }

  onSelectNav = (e) => {
    this.setState({
      activeLink: e.currentTarget.id,
    });
  }

  // TODO, get the active in className working
  render() {
    return (
      <div className="ui secondary pointing menu">
        <div>
          <Link to="/home" className={`item ${this.isActive('home')}`} id="home" onClick={this.onSelectNav}>Home</Link>
        </div>
        <div>
          <Link to="/portfolio" className={`item ${this.isActive('portfolio')}`} id="portfolio" onClick={this.onSelectNav}>Portfolio</Link>
        </div>
        <div>
          <Link to="/resume" className={`item ${this.isActive('resume')}`} id="resume" onClick={this.onSelectNav}>Resume</Link>
        </div>
        <div className="right menu">
          <div>
            <Link to="/login" className={`item ${this.isActive('login')}`} id="login" onClick={this.onSelectNav}>Login</Link>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    activeLink: state.activeLink,
  };
}

export default connect(mapStateToProps, {activeLink})(Header);