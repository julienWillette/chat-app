import React from 'react';
import './Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render() {
    return (
          <div className="Contact">
            <img className="avatar" src={this.props.image} alt={this.props.name}/>
            <div>
              <h4 className="name">{this.props.name}</h4>
              <div className="status">
                      <button className={this.state.online ? 'status-online' : 'status-offline'}
                      onClick={event => {
                      const newOnline = !this.state.online;
                      this.setState({ online: newOnline });
              }}
              >
              <p className="status-text">
                {this.state.online ? "Online" : "Offline"}
              </p>
              </button>
            </div>
          </div>
          </div>
        );
  }
};
  
  export default Contact;