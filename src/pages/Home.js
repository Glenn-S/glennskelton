import React from 'react';
//import headshot from '../images/headshot.png';

export default class Home extends React.Component {

  // TODO extract as component to make other pages look similar
  // <img src={headshot} className="ui medium circular image" /> not working
  render() {
    return (
      <div className="ui container">
        <div className="ui padded segment">
          <h2 className="ui center aligned header">
            Glenn Skelton
          </h2>
          <div className="">
            <p>
              Welocome to my personal site. It is currently under construction right now. Please check back at a later date to see 
              all of the great content that is coming
            </p>
          </div>
        </div>
      </div>
    );
  }
};