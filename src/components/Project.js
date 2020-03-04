import React from 'react';
import Collapsible from './Collapsible';
import AppsContent from './AppsContent';

export default class Project extends React.Component {
  render() {
    return (
      <div className="ui item">
        <Collapsible 
          title={this.props.title} 
          projectLocation={this.props.projectLocation}
          content={<AppsContent>{this.props.children}</AppsContent>} 
        />
      </div>
    );
  }
};