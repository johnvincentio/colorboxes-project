//

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from 'react';
import PropTypes from 'prop-types';

class Box extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		};
	}

	onClick = () => {
		console.log('Box::onClick; id ', this.props.id);
		this.props.changeColor(this.props.id);
	}

	render() {
		console.log('Box::render(); this.props ', this.props);
		const { color } = this.props;
		const rgb = `rgb(${color.r}, ${color.g}, ${color.b})`;
		const style = { 
			backgroundColor: rgb

		}
		return (
			<div
				style={style}
				className="box"
				onClick={this.onClick}
				role="button"
			>
				{rgb}
			</div>
		);
	}
}

Box.propTypes = {
	id: PropTypes.number.isRequired,
	color: PropTypes.shape({
		r: PropTypes.number.isRequired,
		g: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired
	}).isRequired,
	changeColor: PropTypes.func.isRequired
}

export default Box;
