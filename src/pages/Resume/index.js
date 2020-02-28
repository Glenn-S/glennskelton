import React from 'react';
import Page from '../../components/Page';
import Download from '../../components/Download';

export default class Resume extends React.Component {
  render() {
    return (
      <Page>
        <h2 className="ui center aligned header">
          Resume
        </h2>
        <div className="">
          <p>
           Content coming soon
          </p>
          <Download />
        </div>
      </Page>
    );
  }
};