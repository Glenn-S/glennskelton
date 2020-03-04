import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default class Apps extends React.Component {
  render() {
    return (
      <PageTemplate>
        <h2 className="ui center aligned header">
          Apps
        </h2>
        <div className="">
          <p>
            Content coming soon, This will be a section that takes users to React apps that I have built
            like Secret Santa
          </p>
        </div>
      </PageTemplate>
    );
  }
};