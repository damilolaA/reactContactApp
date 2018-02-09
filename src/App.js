import React, { Component } from 'react';

import ContactForm from "./components/contactForm.js";
import ContactList from "./components/contactDirectory.js";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      formIsActive: true,
      contactListIsActive: true
    }
  }

  handleFormData(contactInfo) {
    var contacts = this.state.contacts;
    contacts.push(contactInfo);

    this.setState(contacts);
  }

  showForm() {
    let css = this.state.formIsActive ? "module-active" : "";
    return css;
  }

  showContacts() {
    let css = this.state.contactListIsActive ? "module-active" : "";
    return css;
  }

  render() {

    return (
      <div className="App">

        <ContactForm onsubmit={this.showForm.bind(this)} addContact={this.handleFormData.bind(this)}/>

        <ContactList showContacts={this.showContacts.bind(this)} contactDetails={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
