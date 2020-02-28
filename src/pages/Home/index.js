import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import headshot from '../../images/headshot.png';

export default class Home extends React.Component {

  // TODO extract as component to make other pages look similar
  // <img src={headshot} className="ui medium circular image" /> not working
  render() {
    return (
      <PageTemplate>
        <div className="ui container"> 
          <img src={headshot} className="ui left floated circular image" alt="headshot" />
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
      </PageTemplate>
    );
  }
};