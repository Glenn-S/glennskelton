import React from 'react';

export default class ProjectTitle extends React.Component {
  render() {
    return (
      <h3 
        onMouseEnter={() => {document.body.style.cursor="pointer"}}
        onMouseLeave={() => {document.body.style.cursor="default"}}
        style={this.props.style}
      >
        {this.props.title}
      </h3>
    );
  }
}