//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class Box extends React.Component {

	onClick = () => {
		console.log('Box::onClick; id ', this.props.id);
		this.props.changeColor(this.props.id);
	}

	render() {
		console.log('Box::render(); this.props ', this.props);
		const { id, color, changeColor } = this.props;

		return (
			<div style={{backgroundColor: "red"}} className="box">
				<button type="button" className="box--button" onClick={this.onClick}>
					abc
				</button>
			</div>
		);
	}
}

Box.propTypes = {
	id: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	changeColor: PropTypes.func.isRequired
}

export default Box;
