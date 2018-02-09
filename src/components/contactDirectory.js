import React, { Component } from "react";

import Contacts from "./contacts.js";

class ContactList extends Component {

	render() {
		let contacts;

		if(this.props.contactDetails) {
			contacts = this.props.contactDetails.map((contact) => {
				return (
					<Contacts name={contact.fname} phone={contact.phone}/>
				)
			})
		}

		return (
			<div ref="contacts" id="contacts" className={this.props.activeState ? "module-active": ""}>
				<div className="add-contact">Add Contact</div>
				<ul id="contact-list">
					{contacts}
				</ul>   
			</div>
		)
	}
}

export default ContactList;