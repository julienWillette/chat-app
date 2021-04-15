import React from 'react';
import './Contact.css'

const name= "Dark Pacman";
const image = 'https://randomuser.me/api/portraits/men/18.jpg';
const online = true;

function Contact() {
    return (
          <div className="Contact">
            <img className="avatar" src={image}></img>
            <div>
              <h4 className="name">{name}</h4>
              <div className="status">
                <button className="status-online"></button>
                <p className="status-text">{
                    online ? 'Online' : 'Offline'
                    }</p>
              </div>
            </div>
          </div>
        );
};
  
  export default Contact;