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

    console.log(this.state.content);
    return (
      <div className="ui">
        {this.state.content}
      </div>
    );
  }
};