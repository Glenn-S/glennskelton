import React from 'react';

export default class PageTemplate extends React.Component {
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