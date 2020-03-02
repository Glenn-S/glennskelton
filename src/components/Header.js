import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { activeLink } from '../actions';

class Header extends React.Component {
  isActive = (path) => {
    var active = path === this.props.isActiveLink ? 'active' : '';
    console.log(this.props.isActiveLink);

    return active;
  }

  onSelectNav = (e) => {
    console.log(this.props.isActiveLink);
    
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
        <div>
          <Link to="/apps" className={`item ${this.isActive('apps')}`} id="resume" onClick={this.onSelectNav}>Apps</Link>
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
    isActiveLink: state.activeLink.isActive,
  };
}

export default connect(mapStateToProps, { activeLink })(Header);