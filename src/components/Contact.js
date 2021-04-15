import React from 'react';
import './Contact.css'

function online(online) {
    if (online) {
      return (
        <div className="status">
          <div className="status-online"></div>
          <div className="status-text">Online</div>
        </div>
      );
    } else {
      return (
        <div className="status">
          <div className="status-offline"></div>
          <p className="status-text">Offline</p>
        </div>
      );
    }
  }

function Contact(props) {
    return (
          <div className="Contact">
            <img className="avatar" src={props.image}  />
            <div>
              <h4 className="name">{props.name}</h4>
              <div className="status">
                <div className="name">{props.name}</div>
                    {online(props.online)}
                </div>
            </div>
          </div>
        );
};
  
  export default Contact;