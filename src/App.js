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
      contactListIsActive: false
    }
  }

  handleFormData(contactInfo) {
    let contacts = this.state.contacts;
    contacts.push(contactInfo);

    this.setState(contacts);
    this.setState({contactListIsActive: true});
  }

  showForm() {
    this.setState({contactListIsActive: false})
  }

  render() {

    return (
      <div>
        <ContactForm activeState={this.state.formIsActive} addContact={this.handleFormData.bind(this)}/>

        <ContactList activeState={this.state.contactListIsActive} userForm={this.showForm.bind(this)} contactDetails={this.state.contacts}/>

      </div>
    );
  }
}

export default App;
