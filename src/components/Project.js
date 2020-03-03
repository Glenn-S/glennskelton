import React from 'react';
import Collapsible from './Collapsible';
import AppsContent from './AppsContent';

export default class Project extends React.Component {
  render() {
    return (
      <div className="item">
        <Collapsible 
          title={this.props.title} 
          content={<AppsContent>{this.props.children}</AppsContent>} 
        />
      </div>
    );
  }
};