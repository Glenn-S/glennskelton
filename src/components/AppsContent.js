import React from 'react';

// used to style the content the same way
export default class AppsContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.children
    }
  }

  render() {
    return (
      <div className="">
        {this.state.content}
      </div>
    );
  }
};