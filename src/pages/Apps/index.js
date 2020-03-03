import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import Project from '../../components/Project';

export default class Apps extends React.Component {
  render() {
    return (
      <PageTemplate>
        <h2 className="ui center aligned header">
              Apps
            </h2>
            <div className="">
              <div className="ui list">
                <Project title="First Project">
                  My application description for first project (could add in git hub connectiong eventually)
                </Project>
                <br />
                <Project title="Second Project">
                  My application description for the second project
                </Project>
              </div>
            </div>
      </PageTemplate>
    );
  }
}