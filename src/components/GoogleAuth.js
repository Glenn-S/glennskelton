import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { allowedUsers } from '../config/allowedUsers';

class GoogleAuth extends React.Component {
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // callback function
      window.gapi.client.init({
        clientId: '905299054722-ci25btfu5sv0q0l09dk3si8lrm1afto6.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => { // async function
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get()); // update auth state in redux store
        this.auth.isSignedIn.listen(this.onAuthChange); // set listener for state change
      }); // api client library (gapi client libraries)
    }); // reach over to google server
  }

  // callback to see if user is still signed in
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    //console.log(this.auth.currentUser.get().getBasicProfile().getEmail());
    allowedUsers.forEach(element => {
      if (element === this.auth.currentUser.get().getBasicProfile().getEmail()) {
        this.auth.signIn();
      } else {
        alert("You do not have the correct permissions to log in");
      }
    });
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <div className="">
            <button className="ui red google button right floated" onClick={this.onSignOutClick}>
              <i className="google icon" />
              Sign Out
            </button>
          </div>
          <br />
          <div>
            <h2 className="">
              You have now been authenticated
            </h2>
          </div>
        </div>
        
        );
    } else {
      return (
        <div>
          <div className="">
          <button className="ui green google button right floated" onClick={this.onSignInClick}>
            <i className="google icon" />
            Sign In with Google
          </button>
          </div>
          <br />
          <div>
            <h2 className="">
              You have not been authenticated
            </h2>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps, 
  { signIn, signOut }
)(GoogleAuth); // wire up redux to component