import React, { Component } from "react";

import PropTypes from "prop-types";

class ContactItems extends Component {

	render() {
		return (
			<li>
				<p>{this.props.name}</p>
				<p>{this.props.phone}</p>
				<br/>
			</li>
		)
	}
}

ContactItems.propTypes = {
	name: PropTypes.string,
	phone: PropTypes.string
}

export default ContactItems