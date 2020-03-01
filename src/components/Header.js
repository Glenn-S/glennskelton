import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { activeLink } from '../actions';

class Header extends React.Component {
  initialState = { activeLink: 'home'};

  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  isActive = (path) => {
    var active = path === this.props.activeLink ? 'active' : '';
    console.log(this.props.activeLink);
    return active;
  }

  onSelectNav = (e) => {
    this.props.activeLink(e.currentTarget.id);
    //console.log(e.currentTarget.id);
    /*this.setState({
      activeLink: e.currentTarget.id,
    });*/
  }


  // TODO, get the active in className working
  render(props) {
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