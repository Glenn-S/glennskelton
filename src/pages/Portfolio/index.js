import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import projectList from './projectList';

export default class Portfolio extends React.Component {
  render() {
    return (
      <PageTemplate>
        <h2 className="ui center aligned header">
              Portfolio
            </h2>
            <div className="">
              <div className="ui list">
                {projectList}
              </div>
            </div>
      </PageTemplate>
    );
  }
}