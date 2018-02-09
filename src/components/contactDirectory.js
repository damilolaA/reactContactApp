import React, { Component } from "react";

import Contacts from "./contacts.js";

class ContactList extends Component {

	render() {
		let contacts;

		if(this.props.contactDetails) {
			contacts = this.props.contactDetails.map((contact) => {
				return (
					<Contacts contactItems={contact}/>
				)
			})
		}

		return (
			<div className="App">	
				{contacts} 
			</div>
		)
	}
}

export default ContactList;