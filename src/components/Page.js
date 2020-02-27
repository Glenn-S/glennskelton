import React from 'react';

export default class Page extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui padded segment">
          {this.props.children}
        </div>
      </div>
    );
  }
};