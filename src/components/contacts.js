import React, { Component } from "react";

import PropTypes from "prop-types";

class ContactItems extends Component {

	render() {
		return (
			<li>
				<p>{this.props.name}</p>
				<p>{this.props.phone}</p>
			</li>
		)
	}
}

ContactItems.propTypes = {
	
}

export default ContactItems