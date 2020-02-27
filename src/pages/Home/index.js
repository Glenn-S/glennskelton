import React from 'react';
import Page from '../../components/Page';
import headshot from '../../images/headshot.png';

export default class Home extends React.Component {

  // TODO extract as component to make other pages look similar
  // <img src={headshot} className="ui medium circular image" /> not working
  render() {
    return (
      <Page>
        <div className="ui container"> 
          <img src={headshot} className="ui left floated circular image" />
          <h2 className="ui header">
            Glenn Skelton
          </h2> 
        </div>
        <div className="ui container">
          <div className="ui raised text container">
            Welcome to my personal site. It is currently under construction. Please check back at a later date to see 
            all of the great content that is coming
          </div>
        </div>
      </Page>
    );
  }
};