import React from 'react';

export default class Download extends React.Component {
  // TODO complete pdf download for resume
  render() {
    return (
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed
        </div>
        <div className="ui primary button">Add Document</div>
      </div>
    );
  }
}