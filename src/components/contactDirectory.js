import React, { Component } from "react";
import PropTypes from "prop-types";

import Contacts from "./contacts.js";

class ContactList extends Component {

	showForm() {
		this.props.userForm()
	}

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
				<div className="add-contact" onClick={this.showForm.bind(this)}>Add Contact</div>
				<ul id="contact-list"><br/>
					{contacts} 
				</ul>   
			</div>
		)
	}
}

ContactList.propTypes = {
	contactDetails: PropTypes.array,
	activeState: PropTypes.bool
}

export default ContactList;