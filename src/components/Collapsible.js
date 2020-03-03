import React from 'react';

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

  render() {
    return (
      <div className="ui segment" onClick={this.setToggle}>
        <div className="">
          {this.props.title}
        </div>
        <div className="">
          {
            this.state.isOpen ?
            <div className="">
              <div className="ui clearing divider"></div>
              <div>
                {this.props.content}
              </div>
            </div> : 
            null
          }
        </div>
      </div>
    );
  }
};
