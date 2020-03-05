import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import GoogleAuth from '../../components/GoogleAuth';

export default class Login extends React.Component {
  render() {
    return (
      <PageTemplate>
        <h2 className="ui center aligned header">
            Login
          </h2>
          <div className="">
            <GoogleAuth />
          </div>
      </PageTemplate>
    );
  }
};