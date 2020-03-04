import React from 'react';
import ProjectTitle from '../components/ProjectTitle';

export default class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }    
  }

  setToggle = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // display: inline-block for getting elements on same line

  render() {
    return (
      <div className="ui container" onClick={this.setToggle} style={{ display: "inline-block" }}>
        <div className="ui floating">
          <ProjectTitle title={this.props.title} style={{ float: "left"}} />
          <i 
            style={{ float: "right" }}
            className="github icon large" 
            onClick={() => {window.location="https://github.com/Glenn-S/Arkanoid-for-Raspberry-Pi"}}
            onMouseEnter={() => {document.body.style.cursor="pointer"}}
            onMouseLeave={() => {document.body.style.cursor="default"}}
          />
        </div>
        <div className="">
          {
            this.state.isOpen ?
            <div className="">
              <div className="ui clearing divider"></div>
              <div>
                {this.props.content}
              </div>
              <br />
              <br />
            </div> : 
            null
          }
        </div>
      </div>
    );
  }
};
