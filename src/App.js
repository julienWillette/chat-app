import React from 'react';
import Contact from './components/Contact.js'
import ContactList from './components/ContactList.js'

function App() {
  return (
    <div className="App">
      <Contact 
      name="Cecil Pena"
      image="https://randomuser.me/api/portraits/men/1.jpg"
      online
      />
      <Contact 
      name="Tomothy Parker"
      image="https://randomuser.me/api/portraits/men/66.jpg"
      />
      <Contact 
      name="Willie Lawrence"
      image="https://randomuser.me/api/portraits/women/54.jpg"
      online
      />
      <ContactList />
    </div>
  );
}

export default App;
