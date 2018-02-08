import React, { Component } from 'react';

import ContactForm from "./components/contactForm.js";
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: []
    }
  }

  handleFormData(contactInfo) {
    var contacts = this.state.contacts;
    contacts.push(contactInfo);

    this.setState(contacts);
    console.log(this.state.contacts)
  }

  render() {
    return (
      <div className="App">

        <ContactForm addContact={this.handleFormData.bind(this)}/>

      </div>
    );
  }
}

export default App;
